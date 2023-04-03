class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}
	damage() {
		this.state -= 10;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(
	new NovelBook(
		"Германа Гессе",
		"Демиан: История юности, написанная Эмилем Синклером",
		1919,
		320
	)
)

library.addBook(
	new NovelBook(
		"Герберт Уэллс",
		"Машина времени",
		1895,
		138));
library.addBook(new Magazine(
	"Мурзилка",
	1924,
	60));
let book = library.giveBookByName("Демиан: История юности, написанная Эмилем Синклером");
book.state = 20;
console.log("Состояние книги до повреждения: " + book.state);
book.damage();
console.log("Состояние книги после повреждения: " + book.state);
book.fix();
console.log("Состояние книги после ремонта: " + book.state);
library.addBook(book);
console.log("Количество книг после возврата: " + library.books.length);

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        console.log("Оценка должна быть от 2 до 5");
        return;
      }
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject]) {
        return 0;
      }
      const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      const sum = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
      return sum / subjects.length;
    }
  }