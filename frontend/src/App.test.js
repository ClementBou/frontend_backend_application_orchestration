/**
 * Use Jest to access SharePoint via MSAL
 *
 * @jest-environment node
 */

 import axios from "axios";

 test("Access to backend", async() => {
   const response = axios.get("http://0.0.0.0:3001/api")
   expect((await response).status).toBe(200);
 });