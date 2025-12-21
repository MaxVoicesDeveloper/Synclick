import ButtonMenu from './ButtonMenu/ButtonMenu.jsx'
import './MainPanelHeader.css'
export default function MainPanelHeader({onToggle}){
    return(
        <>
            <div className="main_panel">
                    <div className="logo">
                        <a href="#"><img src="/logos/main-logo-light.svg" alt="Logo" /></a>
                    </div>
                    <ButtonMenu onToggle={onToggle} />
                    <div className="socials">
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/group.svg" alt="Gp" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/google+.svg" alt="Gg" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/youtube.svg" alt="Yt" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/share.svg" alt="Sh" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/facebook.svg" alt="Fb" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/vk.svg" alt="Vk" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="https://telegram/synclick" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/telegram.svg" alt="Telegram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}