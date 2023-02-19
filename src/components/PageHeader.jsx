import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
function PageHeader(props) {
    const typingRef = useRef(null);
    useEffect(() => {
      const typed = new Typed(typingRef.current, {
        strings: props.title,
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
      });
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <div className="page-heading">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner-content">
                        <div className='typing'><span ref={typingRef}></span></div>
                        <span>{props.des}<br></br>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PageHeader;
