const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			favorite:[],
			urlBase: "https://www.swapi.tech/api"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
               getPeople: async () =>{
				let store = getStore()
				try {
					let response = await fetch (`${store.urlBase}/people`)
					let data = await response.json()
					setStore ({
						people:data.result
					})

				console.log (data.result)
				} catch (error) {
					console.log(error)
					
				}

			   }
		}
	};
};

export default getState;
