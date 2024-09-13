"use server";



export const registerToDB = async (data) => {
    return new Promise((resolve) => setTimeout(() => {
        console.log(data);
        return {status: "ok"};
    }, 5000));
   
}