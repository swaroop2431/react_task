function BgColorChange(){
    return(
        <>
            <center>
                <h2>Background Color Change</h2>
                <input type = 'color' onChange={
                    (e)=>{
                        document.body.style.background = e.target.value;
                    }
                } />
            </center>
        </>
    )
}

export default BgColorChange