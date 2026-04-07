import './Teams.css'
import { useEffect } from 'react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Teams() {
useEffect(() => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Keyboard],
    loop: true,
    keyboard: true,
    spaceBetween: 20,

    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  })

  return () => swiper.destroy(true, true)
}, [])



  return(
    <>
        <div className="containers team-page back-cont" id="team">
    <div className="title">Наша команда</div>
    <div className="main-block-team">
        <div className="team-swiper">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="team-card">
                            <div className="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды" />
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div className="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="buttons">
                    <div className="custom-swiper-button-prev left-button"></div>
                    <div className="custom-swiper-button-next right-button"></div>
                </div>
                <div className="pagination">
                    <div className="swiper-pagination"></div>
                </div>
        </div>
    </div>
</div>

    </>
  )
}