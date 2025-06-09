import React from 'react';

export default function AboutPage() {
  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', height: '87.5vh', padding: '20px' }}>
      <div class='product-block' style={{ flex: 1, width: '99.6%', fontSize: '25pt', maxHeight: '49%', justifyContent: 'center', alignContent: 'center', textAlign: 'justify' }}>
      <h1 style={{marginBottom: 20}}>Вітаємо в аптеці "BPharm"!</h1>
      <p>Ми — сучасна аптека, яка дбає про здоров’я кожного клієнта. У нас ви знайдете широкий асортимент ліків, медичних виробів, засобів гігієни та догляду.
      <p>Ми працюємо для вас щодня, щоб забезпечити якісний сервіс, доступні ціни та швидке обслуговування. Довіряйте своє здоров’я професіоналам — обирайте аптеку "BPharm"!</p>
      </p>
      </div>
      <div class='product-block' style={{ flex: 1, width: '99.6%', maxHeight: '49%', fontSize: '25pt', justifyContent: 'center', alignContent: 'center', textAlign: 'justify'}}>
      <h1 style={{marginBottom: 20}}>Контакти</h1>
      <p>Телефон: +380 123 456 789</p>
      <p>Email: stefbogm@gmail.com</p>
      <p>Адреса: м. Полтава, вул. Європейська, 493</p>
      </div>
    </div>
  );
}
