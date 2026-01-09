import './Teams.css'
import { useEffect } from 'react'

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Teams() {
useEffect(() => {
    const swiper = new Swiper('.swiper', {
      keyboard: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      },
      pagination: {
        el: '.pagination',
        clickable: true,
      },
      on: {
        slideChange() {
          const bullets = this.pagination?.bullets
          const activeIndex = this.realIndex

          if (!bullets) return

          bullets.forEach(b =>
            b.classList.remove('prev', 'next')
          )

          bullets[activeIndex - 1]?.classList.add('prev')
          bullets[activeIndex + 1]?.classList.add('next')
        }
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1400: { slidesPerView: 3 }
      }
    })

    return () => {
      swiper.destroy(true, true)
    }
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