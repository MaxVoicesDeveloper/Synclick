<?include_once '../backend/arrays/type-web-site.php'?>

<div class="containers order-page back-cont" id="order">
    <div class="title">Заказать проект</div>
    <div class="main-block-order">
        <div class="design-elements">
            <img class="cosmo-man" src="../assets/images/illustration/girlidea.png" alt="">
        </div>
        <div class="forms">
            <div class="form-ord-main">
                 <span class="title-form">Оставьте заявку</span>
                <form action="" method="POST" class="form-ord">
                <div class="form-floating">
                  <input type="name" class="inp-ord form-control" id="floatingInputGrid" placeholder="Имя">
                  <label for="floatingInputGrid">Имя</label>
                </div>
                <div class="form-floating">
                  <input type="email" class="inp-ord form-control" id="floatingInputGrid" placeholder="Почта" >
                  <label for="floatingInputGrid">Почта</label>
                </div>
                <div class="form-floating">
                  <input type="num" class="inp-ord form-control" id="phone" placeholder="+7(___)___-__-__">
                  <label for="floatingInputGrid">Номер</label>
                </div>
                <div class="form-floating">
                  <select class="inp-ord form-select" id="floatingSelectGrid">
                    <?php
                      if(!empty($typeWebSite)){
                        foreach($typeWebSite as $key => $value){?>
                          <option value="<?=$key?>"><?=$value?></option>
                          <?
                        }
                      }
                    ?>
                  </select>
                  <label for="floatingSelectGrid">Тип веб-сайта</label>
                </div>
                <button class="button_send">Отправить заявку</button>
            </form>
            </div>
        </div>
        
    </div>
</div>
