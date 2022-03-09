# Movie-React-Project

This is a react.js based movie project that allows you to see all movies, search & filter them by genre.

## Demo
[Click here ](https://www.ah1.ir) to see the live demo


## Front end
-[ReactJS](https://reactjs.org/)

-[React Router](https://github.com/ReactTraining/react-router)

-[Scss](http://sass-lang.com/)

-[Redux](http://redux.js.org/)

-[Tailwind](https://tailwindcss.com/)

## Back end

-[Wordpress](https://wordpress.org) as headless CMS

-[Advanced Custom Fields](https://www.advancedcustomfields.com/) for the movie details section (Director, Writer, Stars, Rating, Length)  

I used the default WordPress API to access my data


Get all Categories in wp-admin>post>categories 
```bash
https://back.ah1.ir/wp-json/wp/v2/posts
```


Get all movies in wp-admin>posts
```bash
https://back.ah1.ir/wp-json/wp/v2/posts
```

Get all posts in the selected category
```bash
https://back.ah1.ir/wp-json/wp/v2/posts?categories={category-id}
```


Get all posts in the selected category and containing the keyword we searched for 
```bash
https://back.ah1.ir/wp-json/wp/v2/posts?categories={category-id}&search={title}
```


# How to install


## Clone
```bash
git clone https://github.com/mrkohan/React-Movie-Project
```

## Install

```bash
npm install
```
## Run

```bash
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)