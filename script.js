let data;

async function fetchPosts() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts")

		data = await response.json()
		// console.log(data)

	} catch (err) {
		console.error("Failed to fetch post!")
	}

	//creo una classe per post

	class Post {
		constructor(options) {
			this.id = options.id
			this.title = options.title
			this.body = options.body
		}
	}


	for (let i = 0; i < 10; i++) {

		//istazionio i post per la lunghezza dell array
		const post = new Post({
			id: data[i].userId,
			title: data[i].title,
			body: data[i].body
		})

		// console.log(post)


		//stampo i post in html
		let row =
			`<tr>
		<td>${post.id} </td>
		<td>${post.title} </td>
		<td>${post.body} </td>
		 </tr>`;
		const tdbody = document.querySelector("#table")
		tdbody.insertAdjacentHTML("afterend", row);
	}
}



let albums;
async function fetchAlbum() {
	try {
		const response_albums = await fetch("https://jsonplaceholder.typicode.com/albums")
		albums = await response_albums.json()
		console.log(albums)
	} catch (err) {
		console.error("Failed to fetch post!")
	}

	class Album {
		constructor(options) {
			this.id = options.id
			this.id_user = options.id_user
			this.title = options.title
		}
	}

	for (let i = 0; i < 10; i++) {
		const album = new Album({
			id: albums[i].id,
			id_user: albums[i].userId,
			title: albums[i].title
		})

		console.log("ALBUM", album)


		let row_album =
			`<tr>
		<td>${album.id} </td>
		<td>${album.id_user} </td>
		<td>${album.title} </td>
		 </tr>`;
		const tdbody = document.querySelector("#table_album")
		tdbody.insertAdjacentHTML("afterend", row_album);

	}
}


let photos;
async function fetchPhotos() {
	try {
		const response_photos = await fetch("https://jsonplaceholder.typicode.com/photos")
		photos = await response_photos.json()
		console.log(photos)
	} catch (err) {
		console.error("Failed to fetch post!")
	}



	class Photo {
		constructor(options) {
			this.title = options.title
			this.thumbnailUrl = options.thumbnailUrl
		}
	}

	for (let i = 0; i < 10; i++) {
		const photo = new Photo({
			title: photos[i].title,
			thumbnailUrl: photos[i].thumbnailUrl
		})

		console.log("PHOTO", photo)


			let row_photos =
				`<img src=${photo.thumbnailUrl} alt=${photo.title}> `;
			const tdbody = document.querySelector(".gallery")
			tdbody.insertAdjacentHTML("afterend", row_photos);

		}
	}



fetchPosts()
fetchAlbum()
fetchPhotos()
