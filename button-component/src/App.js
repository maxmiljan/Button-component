import './App.css';
import Button from './components/Button';

function App() {

  return (
    <div className="App">
      <h1 className='title'>Buttons</h1>
      <div className="default-div">
      <Button/>
      </div>
      <div className="variant-div">
      <Button variant="outline"/>
      <Button variant="text"/>
      </div>
      <div className="disable-shadow-div">
      <Button disableShadow/>
      </div>
      <div className="disabled-div">
      <Button disabled/>
      <Button disabled variant='text'/>
      </div>
      <div className="icon-div">
      <Button startIcon = 'add_shopping_cart'  />
      <Button endIcon = 'add_shopping_cart'  />
      </div>
      <div className="size-div">
      <Button size= 'sm' />
      <Button size= 'md' />
      <Button size= 'lg' />
      </div>
      <div className="color-div">
      <Button text = "Default" color = 'default' />
      <Button text = "Default" color = 'primary' />
      <Button text = "Secondary" color = 'secondary' />
      <Button text = "Danger" color = 'danger' />
      </div>
      <p>Icons: <a href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a></p>
      <p>created by <a href="https://github.com/maxmiljan">maxmiljan</a> - devChallenges.io</p>
    </div>
  );
}

export default App;
