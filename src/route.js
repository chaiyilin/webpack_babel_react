//http://frontend.turing.io/lessons/react-router-4.html
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
    return (
        <BrowserRouter>
            <Match exactly pattern="/" component={App}/>
            <Match pattern="/about/:name" component={DynamicAboutPage} />
            <Miss component={NotFound} />
        </BrowserRouter>
    )
}