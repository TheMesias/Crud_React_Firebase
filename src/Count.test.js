import Login from "./components/Login";
import Register from "./components/Register";
import Show from "./components/Show";
import Edit from "./components/Edit";
import Create from "./components/Create";

import { fireEvent, getByRole, getByTestId, render } from "@testing-library/react";

describe(Login, () => {
    it("Se conecta con Firebase", () => {
        const {getByTestId} = render(<Login/>)
        const countValue = getByTestId("serial").textContent; 
        expect(countValue).toEqual("1:846417233557:web:27cade3a8dda46ea3d3d9c")
    })
})

describe(Show, () => {
    it("Correcto Usuario", () => {
        const {getByTestId} = render(<Show/>)
        const countValue = getByTestId("user").textContent; 
        expect(countValue).toEqual("f.mesias99@gmail.com")
    })

describe(Edit, () => {
    it("Producto editado correctamente", () => {
        const {getByTestId} = render(<Show/>)
        const data = getByRole("button", {name: "data"})
        const description = getByTestId("description").textContent; 
        const stock = getByTestId("stock").textContent; 
        expect("description").toEqual("smatphone")
        expect("stock").toEqual(1)
        fireEvent.click(data)
    })

describe(Create, () => {
    it("Producto editado correctamente", () => {
        const {getByTestId} = render(<Show/>)
        const data = getByRole("button", {name: "data"})
        const description = getByTestId("description").textContent; 
        const stock = getByTestId("stock").textContent; 
        expect("description").toEqual("tv")
        expect("stock").toEqual(5)
        fireEvent.click(data)
    })
})

