import './side-bar.css'

function SideBar (){
    return (
     <div className="sidebar-container">
        <div className='profile'>
            <div className="profile-pic">
                <img src="" alt="" />
            </div>
            <div className='profile-name'>
                <h2>Wanchana Inmasom</h2>
                <p1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, deleniti!</p1>
            </div>
        </div>
        <hr />
        <div className='sidebar-content'>
            <div className='contact'>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Email</p1> <br />
                    <p2>windaywf@gmail.com</p2>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Github</p1> <br />
                    <a href="https://github.com/Wanchana3om">Wanchana3om</a>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Phone</p1> <br />
                    <p2>(+66) 61-998-3569</p2>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Address</p1> <br />
                    <p2>Ayutthaya,Wangnoi 13170</p2>
                </div>
            </div>
            <hr />
            <div className='socials'>
                
                <p1>Socails</p1>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Facebook</p1> <br />
                    <p2>windaywf@gmail.com</p2>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Instargram</p1> <br />
                    <p2>windaywf@gmail.com</p2>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Twitter</p1> <br />
                    <p2>(+66) 61-998-3569</p2>
                </div>
                <div className='contact-email'>
                    <img src="sss" alt="" />
                    <p1>Linkedin</p1> <br />
                    <p2>wwwww1111</p2>
                </div>
            </div>

        </div>
        <hr />

     </div>   
    )
}

export default SideBar;