const person = {
    city: "Moscow"
};
const student = Object.create(person);
student.ownCity = "Piter";
function func(obj) {
    for (let entries in obj) {
        if (obj.hasOwnProperty(entries)) {
            console.log(Object.entries(obj));
        }
    }
}
func(student);

