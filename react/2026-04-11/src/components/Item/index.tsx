export default function ({text, color, isShow}) {
    console.log("props =", text, color);
    return (
        <>
            {/*<p style={{color:color, display: isShow ? "block" : "none"}}>{text}</p>*/}
            {isShow && <p style={{color:color}}>{text}</p>}

        </>
    )
}