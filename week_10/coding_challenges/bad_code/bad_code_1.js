/* Code adapted from https://shitcode.net/best/language/javascript */

function focused(e, ers) {
	var form = evt.target

	output = ers.map((e)=> {
		let focusedInput = (Object.keys(error) == "phonebookId") ? Object.keys(error) :
			(Object.keys(error) == "phonebook_str") ? Object.keys(error) :
				(Object.keys(error) == "message") ? Object.keys(error) :
					(Object.keys(error) == "image") ? Object.keys(error) :
						(Object.keys(error) == "buttonLink") ? Object.keys(error) :
							(Object.keys(error) == "messageSms") ? Object.keys(error) : false
		return focusedInput.shift();
	})

	const selector = output.shift();

	form.querySelector('[id="' + selector + '"]').focus()

	return selector
}

const mockE = {};
const mockEr = {};

const f1 = focused(mockE, mockEr)
f1 = focused(mockE, mockEr)
