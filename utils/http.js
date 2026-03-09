import axios from "axios";

const URL = "https://extreme-tooling-476209-s3-default-rtdb.firebaseiocom";
export async function ExpenseCreation(data) {
    const response = await axios.post(URL + "/Expenses.json", data);
    console.log(response.data);
    return response.data.name;
    // we can use the property name called name to acccess the id in the response data
    // once the data is created then the data goes to backend in firebase then it also respond with the created data and we can fetch the id created by the firebase for that data we given
}

export async function ExpenseFetch() {
    const response = await axios.get(URL + "/Expenses.json");
    const expenses = [];
    for (const key in response.data) {
        const dataObj = {
            id: key,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
            amount: response.data[key].amount
        }
        expenses.push(dataObj);
    }

    return expenses;

}


export function ExpenseUpdate(id, ExpenseData) {
    return axios.put(URL + `/Expenses/${id}.json`, ExpenseData);

}


export function ExpensesDelete(id) {
    axios.delete(URL + `/Expenses/${id}.json`);
}