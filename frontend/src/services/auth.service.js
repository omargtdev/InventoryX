import apiService from "./api.service";

// TODO: Get base url from env
const BASE_URL = "http://localhost:4500/auth";

/**
 * ResponseModel
 * ok: boolean
 * data: any
 * errorMessage: string
 */

const baseModel = { ok: false, data: null, erroMessage: null };


const login = async (username, password) => {
	try {
		const response = await apiService.POST(`${BASE_URL}/login`, { username, password });
		const data = await response.json();
		if(!response.ok)
			return { ...baseModel, erroMessage: data.message };

		return { ...baseModel, ok: response.ok, data }
	} catch (error) {
		throw { ...baseModel, errorMessage: "Ups! Ocurrió un error al tratar de autenticarse" };
	}
}

export default {
	login
}
