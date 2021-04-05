

const renderJSX = (
	<div>
		<body>
			<header>
				<div className="wrapper">
					<div className="header">
						<a href="#"><div className="header-logo"></div></a>
						<a href="tel:888" className="header-phone"></a>
						<div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
					</div>
				</div>
			</header>
			<main>
				<div className="wrapper">
					<div className="main">
						<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
						<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
						вебмастеру сгенерировать несколько абзацев более.
				</div>
						<button className="btn main-btn"><span>Подробнее</span></button>
					</div>
				</div>
			</main>

			<section className="contact">
				<div className="wrapper">
					<div className="contact-wrapper">
						<h2 className="contact-title">Остались вопросы?</h2>
						<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
						<form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя" />
							<input type="tel" placeholder="Телефон" /> <input type="email" placeholder="E-mail" />
							<button
								className="btn contact-btn"><span>Позвоните мне</span></button>
						</form>
						<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
				</div>
					</div>
				</div>
			</section>


			<footer>
				<div className="footer">
					<div className="footer-logo"></div>
					<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
					<a href="tel:888"
						className="footer-phone"></a>
					<div className="footer-websurfer"><span class="footer-websurfer_build">Сделано</span> <a href="#"
					>Сергей Шашко</a></div>
					<div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
				</div>
			</footer>
		</body>
	</div>
);


ReactDOM.render(renderJSX, document.getElementById('root'));