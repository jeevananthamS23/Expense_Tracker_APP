import axios from "axios";


export function ExpenseCreation(data) {
    axios.post("https://extreme-tooling-476209-s3-default-rtdb.firebaseio.com/Expeses.json", data);
}

export async function ExpenseFetch() {
    const response = await axios.get("https://extreme-tooling-476209-s3-default-rtdb.firebaseio.com/Expeses.json");
    const expenses=[];
    for(const key in response.data){
        const dataObj={
            id:key,
            date: new Date(response.data[key].date),
            description:response.data[key].description,
            amount:response.data[key].amount
        }
         expenses.push(dataObj);
    }

    return expenses;

}