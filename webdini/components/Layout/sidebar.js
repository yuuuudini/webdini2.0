
export default function Sidebar(){
    return(
        <div style={{height:'100%', width:'300px', backgroundColor:'grey'}}>
            <ul>
                <li><span></span><i className="fa-regular fa-folder-open"></i>root
                    <ul>
                        <li>folder one
                            <ul>
                                <li><span></span>file_one.txt</li>
                                <li>file_two.txt</li>
                            </ul>
                        </li>
                        <li>folder two
                            <ul>
                                <li>file_one.txt</li>
                                <li>file_two.txt</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>)
}