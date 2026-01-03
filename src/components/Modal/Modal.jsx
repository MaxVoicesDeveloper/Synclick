import './Modal.css';

export default function Modal(){
    return (
        <div class="modal fade" id="modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-5 p-4 bg-dark text-white">

      <form>
        <div class="modal-header">
          <h5 class="modal-title fs-2">Оставьте заявку - мы свяжемся с вами</h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"></button>
        </div>
        <div className="form-text px-4 pt-3 text-white-50 fs-6">
           Начните прямо сейчас - получите персональное решение под вашу задачу без лишней болтовни!
        </div>
        <div class="modal-body px-4 pb-0">
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingName"
                    placeholder=" "
                />
                <label for="floatingName">Имя</label>
                </div>

                <div class="form-floating mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="floatingEmail"
                    placeholder=" "
                />
                <label for="floatingEmail">Почта</label>
                </div>

                <div class="form-floating mb-3">
                <input
                    type="tel"
                    class="form-control"
                    id="floatingPhone"
                    placeholder=" "
                />
                <label for="floatingPhone">Телефон</label>
            </div>

        </div>
        <div className="form-text px-4 pb-4 text-white-50 fs-6">
            Расскажите коротко о задаче. Мы изучим запрос, предложим решение и обозначим сроки и стоимость без навязывания лишнего.
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary w-100">
            Отправить заявку
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

    )
}