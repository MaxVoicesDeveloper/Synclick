<div class="containers team-page back-cont" id="team">
    <div class="title">Наша команда</div>
    <div class="main-block-team">
        <div class="team-swiper">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <?php
                        for($i = 1; $i<= 10; $i++){
                            ?>
                                <div class="swiper-slide">
                        <div class="team-card">
                            <div class="photo">
                                <img src="https://avatars.mds.yandex.net/i?id=330c8000300f81a8c3cc29891417e472_l-4440117-images-thumbs&n=13" alt="Член команды">
                            </div>
                            <h3>Иван Иванов</h3>
                            <p>Frontend-разработчик</p>
                            <div class="description-user">
                                Иван отвечает за отдел мошшеничества, забирая деньгу у бедных людь
                                P.S - Охотится за пророком Солнце Боем пророком САН боем . Пророк Сан Бой, легенда музыки, великий пророк санбой
                            </div>
                        </div>`                                         
                    </div>
                            <?
                        }
                    ?>
                </div>
            </div>
                <div class="buttons">
                    <div class="custom-swiper-button-prev left-button"></div>
                    <div class="custom-swiper-button-next right-button"></div>
                </div>
                <div class="pagination">
                    <div class="swiper-pagination"></div>
                </div>
        </div>
    </div>
</div>
