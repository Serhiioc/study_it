let name = prompt("какое твое имя");
let age = prompt("сколько тебе лет");

if (age < 0) {
    alert("Введите коректный возраст")
} else if (age <= 16) {
    console.log(`Привет, ${name}! Вы подросток`);
} else if(age >16 || age <= 40) {
    console.log(`Привет, ${name}! Вы молодой человек`);
} else {
    console.log(`Привет, ${name}! Вы старичок`);
}
    