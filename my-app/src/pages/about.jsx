import React from 'react';
import '../style/stylepage.css';

 const isMobile = window.innerWidth <= 700;
     const productBlockStyle = isMobile
    ? {
        width: '90vw',
        minWidth: 0,
        height: 'auto',
        maxHeight: '100vh',
        margin: '0 auto',
        marginBottom: '20pt',
        overflow: 'auto',
        fontSize: '9pt',
        padding: 8,
      }
    : {
        width: '60%',
        minWidth: 0,
        height: 'auto',
        maxHeight: '100%',
        margin: '10',
        marginBottom: '20pt',
        overflow: 'auto',
        fontSize: '15pt',
        padding: 20,
      };

export default function AboutPage() {
  return (
    <div className='container'>
      <div class='product-block' style={productBlockStyle}>
      <h1 style={{marginBottom: 20}}>Вітаємо в аптеці "BPharm"!</h1>
      <p>Ми — сучасна аптека, яка дбає про здоров’я кожного клієнта. У нас ви знайдете широкий асортимент ліків, медичних виробів, засобів гігієни та догляду.
      <p>Ми працюємо для вас щодня, щоб забезпечити якісний сервіс, доступні ціни та швидке обслуговування. Довіряйте своє здоров’я професіоналам — обирайте аптеку "BPharm"!</p>
      </p>
      </div>
      <div class='product-block' style={productBlockStyle}>
      <h1 style={{marginBottom: 20}}>Контакти</h1>
      <p>Телефон: +380 123 456 789</p>
      <p>Email: stefbogm@gmail.com</p>
      <p>Адреса: м. Полтава, вул. Європейська, 493</p>
      </div>
    </div>
  );
}
