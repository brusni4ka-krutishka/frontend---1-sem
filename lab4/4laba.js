function one() {
	function Gruppa(n, spec, kolich) {
		//свойства
		this.n = n;
		this.spec = spec;
		this.kolich = kolich;
		//метод(добавить в группу k студентов)
		this.add_stud = function add_stud(k) {
			this.kolich += k;
			document.write(
				`В группу ${this.n} ${this.spec} добавили ${k} студентов <br>`
			);
		};
		this.sub_stud = function sub_stud(r) {
			this.kolich -= r;
			document.write(
				`Из группы ${this.n} ${this.spec} отчислилось ${r} студентов <br>`
			);
		};
	}

	//теперь можно создать экземпляр объекта
	gr1 = new Gruppa(2, "ИСиТ", 28);
	//вызов метода созданного объекта(добавить 2 студента)
	gr1.add_stud(2);
	gr1.sub_stud(4);

	gr2 = new Gruppa(5, "ПОиТ", 31);
	gr2.add_stud(1);
	gr2.sub_stud(3);

	gr3 = new Gruppa(8, "ПОИБМС", 30);
	gr3.add_stud(0);
	gr3.sub_stud(15);

	//с помощью prototype добавим объекту свойство kurs
	//экземпляры объекта будут иметь это свойство
	Gruppa.prototype.kurs = this.kurs;
	gr1.kurs = 2;
	gr2.kurs = 2;
	gr3.kurs = 2;
	document.write(`
			         
			                     Текущее количество студентов по группам: <br>
						${gr1.n} ${gr1.spec} ${gr1.kolich} ${gr1.kurs} <br>
						${gr2.n} ${gr2.spec} ${gr2.kolich} ${gr1.kurs} <br>
						${gr3.n} ${gr3.spec} ${gr3.kolich} ${gr3.kurs}  <br>
			              
			         `);
}
function two() {
	function Student(name, surname, physics, mathematics, informatics) {
		this.name = name;
		this.surname = surname;
		this.physics = physics;
		this.mathematics = mathematics;
		this.informatics = informatics;
		this.display_fullname = display_fullname = (n) => {
			let mark = Math.round(
				(this.physics + this.mathematics + this.informatics) / 3
			);
			document.write(
				`${this.name} ${this.surname} имеет средний балл: ${mark} <br/> `
			);
		};
	}
	student1 = new Student("Анастасия", "Новиченко", 7, 9, 9);
	student1.display_fullname();

	student2 = new Student("Евгений", "Гончаревич", 8, 9, 10);
	student2.display_fullname();

	student3 = new Student("Анна", "Казак", 6, 7, 8);
	student3.display_fullname();
	Student.prototype.class = this.class;
	student1.class = 11;
	student2.class = 11;
	student3.class = 11;

	document.write(`
	<br/>
	Сведения об учащихся: 
	<br/>
	1. ${student1.name} ${student1.surname} учится в ${student1.class} классе
	<br/>
	Физика: ${student1.physics}
	<br/>
	Математика: ${student1.mathematics}
	<br/>
	Информатика: ${student1.informatics}
	<br/>
	Средний балл: ${student1.mark}
	<br/>
	<br/>
	2. ${student2.name} ${student2.surname} учится в ${student2.class} классе
	<br/>
	Физика: ${student2.physics}
	<br/>
	Математика: ${student2.mathematics}
	<br/>
	Информатика: ${student2.informatics}
	<br/>
	Средний балл: ${student2.mark}
	<br/>
	<br/>
	3. ${student3.name} ${student3.surname} учится в ${student3.class} классе
	<br/>
	Физика: ${student3.physics}
	<br/>
	Математика: ${student3.mathematics}
	<br/>
	Информатика: ${student3.informatics}
	<br/>
	Средний балл: ${student3.mark}
	<br/>
	<br/>
	`);
}
function three() {
	let A = ["pow", "pop", "push", "shift", "round", "floor", "slice", "sort"];
	document.write(`
	Исходный массив: 
	<br/>
	 `);
	for (let i = 0; i < A.length; i++) {
		document.write(`${A[i]} <br/>`);
	}
	delete A[3];
	document.write(
		`Массив, с удаленным элементом под номером 3: 
		<br/>
		`
	);
	for (let i = 0; i < A.length; i++) {
		document.write(`${A[i]} <br/>`);
	}

	function Group(n, spec, kolich) {
		this.n = n;
		this.spec = spec;
		this.kolich = kolich;
	}

	gr1 = new Group(3, "Дэйви", 18);

	document.write(`Проверка наличия свойств spec у объекта gr1: 
	<br/>
	In: ${"spec" in gr1}
	<br/>
	Проверка наличия элемента с номером 1 в массиве A: 
	<br/>
	In: ${1 in A}
	<br/>
	<br/>
	`);
	//Проверить, являются ли созданные объекты объектами Array, String, Object
	document.write(
		`
		Instanceof: 
		<br/>
		${A instanceof Array}
		<br/>
		${A instanceof String}
	    <br/>
		${Group instanceof Number}
		<br/>
		${Group instanceof Object}
		<br/>
		`
	);

	function five() {
		let x = 5;
		return x;
	}
	//Узнать тип всех созданных ранее объектов, включая функцию
	document.write(
		`
		Typeof:
		<br/>
		${typeof gr1.kolich}
		<br/>
		${typeof five}
		<br/>
		${typeof A}
		<br/>
		${typeof Group}
		<br/>
		
		`
	);
}
