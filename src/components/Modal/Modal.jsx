import './Modal.css';

export default function Modal(){
    return (
        <div className="modal fade" id="modal" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-5 p-4 bg-dark text-white">

      <form>
        <div className="modal-header">
          <h5 className="modal-title fs-2">Оставьте заявку - мы свяжемся с вами</h5>
          <button type="button" className="btn-close bg-white" data-bs-dismiss="modal"></button>
        </div>
        <div className="form-text px-4 pt-3 text-white-50 fs-6">
           Начните прямо сейчас - получите персональное решение под вашу задачу без лишней болтовни!
        </div>
        <div className="modal-body px-4 pb-0">
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder=" "
                />
                <label for="floatingName">Имя</label>
                </div>

                <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder=" "
                />
                <label for="floatingEmail">Почта</label>
                </div>

                <div className="form-floating mb-3">
                <input
                    type="tel"
                    className="form-control"
                    id="floatingPhone"
                    placeholder=" "
                />
                <label for="floatingPhone">Телефон</label>
            </div>

        </div>
        <div className="form-text px-4 pb-4 text-white-50 fs-6">
            Расскажите коротко о задаче. Мы изучим запрос, предложим решение и обозначим сроки и стоимость без навязывания лишнего.
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary w-100">
            Отправить заявку
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

    )
}