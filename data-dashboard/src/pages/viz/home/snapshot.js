import React, { useEffect, useRef } from 'react';
import '../viz.css';
const { tableau } = window;

export function SnapViz() {
    var viz;
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/snapshot_final/snapshot_final?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

    const initViz = () => {
        if (viz) {
            viz.dispose();
        }
        viz = new tableau.Viz(ref.current, url, { width: "100%", height: "90vh" });
    }

    useEffect(initViz, []);
    return <div ref={ref} />

}

export default SnapViz;