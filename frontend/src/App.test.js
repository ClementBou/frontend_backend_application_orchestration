/**
 * Use Jest to access SharePoint via MSAL
 *
 * @jest-environment node
 */

 import axios from "axios";

 test("Access to backend", async() => {
   const response = axios.get("http://localhost:3001/api")
   expect((await response).status).toBe(200);
 });