import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className='calculator'>
        <div className='container'>
          <h2 className='section-title'>
            Подключите PRO-версию Jivo с выгодой
          </h2>
          <div className='section-title-mobile'>
            Переходите на<br /> Про-версию Jivo с выгодой
          </div>
          <div className='calculator-block'>
            <div className='period-block'>
              <span className='period-block-text'>
                Выберите срок действия лицензии:
              </span>
              <div className='period-block-btn'>
                <input type="radio" id="periodChoice1" name="period" value="3" />
                <label className='period-block-btn-item period-block-btn-item-checked' for="periodChoice1">3&nbsp;месяца</label>

                <input type="radio" id="periodChoice2" name="period" value="12" />
                <label className='period-block-btn-item' for="periodChoice2">12&nbsp;месяцев</label>

                <input type="radio" id="periodChoice3" name="period" value="24" />
                <label className='period-block-btn-item' for="periodChoice3">24&nbsp;месяца</label>
              </div>
              <div className='period-block-btn period-block-btn-mobile'>
                <input type="radio" id="periodChoice1" name="period" value="3" />
                <label className='period-block-btn-item period-block-btn-item-checked' for="periodChoice1">3&nbsp;мес.</label>

                <input type="radio" id="periodChoice2" name="period" value="12" />
                <label className='period-block-btn-item' for="periodChoice2">12&nbsp;мес.</label>

                <input type="radio" id="periodChoice3" name="period" value="24" />
                <label className='period-block-btn-item' for="periodChoice3">24&nbsp;мес.</label>
              </div>
            </div>
            <div className='present-block'>
              <div className='present-block-right'>
                <div className='present-block-right-btn'>
                  <div className='present-block-right-btn-wrap present-block-right-btn-wrap-checked'>
                    <input type="radio" id="presentChoice1" name="present" value="1" />
                    <label className='present-block-right-btn-wrap-item' for="presentChoice1">Подарок:<span>+1 месяц</span></label>
                  </div>
                  <div className='present-block-right-btn-wrap'>
                    <input type="radio" id="presentChoice2" name="present" value="0" />
                    <label className='present-block-right-btn-wrap-item present-block-right-btn-wrap-item_big' for="presentChoice2">Лицензия на 1 оператора:<span>4 243 ₽</span></label>
                  </div>
                </div>
                <div className='present-block-right-profit'>
                  <span className='present-block-right-profit-text'>
                    Лицензия на 1 оператора в месяц:
                  </span>
                  <div className='present-block-right-profit-prices'>
                    <span className='present-block-right-profit-prices-old'>
                      1 414 ₽
                    </span>
                    <span className='present-block-right-profit-prices-new'>
                      1 061 ₽
                    </span>
                  </div>
                </div>
              </div>
              <div className='present-block-left'>
                <div className='present-block-left-text'>
                  Чтобы&nbsp;получить&nbsp;подарок, назовите&nbsp;менеджеру&nbsp;кодовое слово&nbsp;
                  <span className='present-block-left-text-selection'>
                    «Весна&nbsp;с&nbsp;Jivo»
                  </span>
                </div>
                <div className='present-block-left-connection'>
                  <button className='present-block-left-connection-btn'>
                    Написать в чат
                  </button>
                  <a href='/' className='present-block-left-connection-link'>Подробные условия акции</a>
                </div>
              </div>
            </div>
          </div>
          <p className='section-text'>
            С PRO-версией ни один клиент не останется без внимания
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
