// import any set up and relevant methods from BaaS provider

export async function register(email, password) {
	try {
		const response = await methodFromVendor(email, password);
		// if, for example, a user property is returned
		const { user } = response;
		return { user };
	} catch (error) {
		return { error };
	}
}
