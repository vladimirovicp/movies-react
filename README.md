# movies-react

### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`


```
    componentDidMount(){
        console.log('Компонент смонтировался | единожды');
    }
    
    componentDidUpdate(){
        console.log('Компонент обновился');
    }
    
    componentWillUnmount(){
        console.log('Размонтирование');
    }
```

* npm install gh-pages --save-dev
* script -> "predeploy": "npm run build",
* script -> "deploy": "gh-pages -d build"
