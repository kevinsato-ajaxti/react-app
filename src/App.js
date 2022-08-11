import React, {useState} from 'react';

import Post from './Post';
import Header from './Header';

import { ThemeProvider } from './ThemeContext'

import styles from './App.scss';

/* const posts = [
    {id: Math.random(), title:'Title#01', subtitle: 'Sub#01', likes: 20},
    {id: Math.random(), title:'Title#02', subtitle: 'Sub#02', likes: 10},
    {id: Math.random(), title:'Title#03', subtitle: 'Sub#03', likes: 50}
] */

// Provider -> O aplicativo chama o provider, todos os filhos do provider
// e passa as props dentro do Provider. Os filhos de provider vão utilizar todos
// os props do provider


// Props => propriedades 

// Render -> renderizar (mostrar em tela)
// functional component
function App(){
    const [posts, setPosts] = useState([
        {id: Math.random(), title:'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: false},
        {id: Math.random(), title:'Title#02', subtitle: 'Sub#02', likes: 10, read: true, removed: false},
        {id: Math.random(), title:'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false}
    ]);

    function handleRefresh(){
        /* posts.push({
            id: Math.random(), 
            title:`Title#0${posts.length + 1}`, 
            subtitle: `Sub#0${posts.length + 1}`, 
            likes: 50
        }); */

        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(), 
                title:`Title#0${prevState.length + 1}`, 
                subtitle: `Sub#0${prevState.length + 1}`, 
                likes: 50
            } 
        
        ]);
        
    }


    function handleRemovePost(postId){
        setPosts((prevState) => prevState.map(
            post => (
                post.id === postId 
                ? {...post, removed: true}
                : post
        )
        ));
    }

    return(
        <ThemeProvider>
            <Header>
                <h2 className={styles.title}>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
                
            </Header>

            <hr/>

            {posts.map(post => (
                <Post
                    key={post.id}
                    likes={post.likes}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}

            {/* <Post
            likes={20}
            post={{
                title:"Titulo da noticia 01",
                subtitle:"Subtitulo da noticia 01" 
            }}
            />

            <Post
            likes={10}
            post={{
                title:"Titulo da noticia 02",
                subtitle:"Subtitulo da noticia 02" 
            }}
            />

            <Post
            likes={50}
            post={{
                title:"Titulo da noticia 03",
                subtitle:"Subtitulo da noticia 03" 
            }}
            /> */}

        </ThemeProvider>
    );
}

export default App;