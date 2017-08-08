import React            from 'react';
import { injectIntl }   from 'react-intl';
import { Button, Icon } from '../../index';


const ButtonPage = () => (
      <div className="displaySection">
        <h2><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Buttons</a></h2>

        <div className="elementContainer">

          <div className="code">
            <h3>Props:</h3>
            <ul>
              <li>btnType:String === "primary", "cta", "default"</li>
              <li>btnSize:String === "small", "large", "xlarge"</li>
              <li>btnIcon:Bool === true/false</li>
              <li>disabled</li>
            </ul>
          </div>

          <h3>Icon Button:</h3>
          <Button btnIcon><Icon name="item-remove-24">close dialog</Icon></Button>
          <p className="code">{'<Button btnIcon><Icon name="item-remove-24">close dialog</Icon></Button>'}</p>

          <br />

          <h3>Default Button:</h3>
          <Button>Default</Button>
          <p className="code">{'<Button>Default</Button>'}</p>

          <br />

          <h3>Primary Button:</h3>
          <Button btnType="primary">Primary</Button>
          <p className="code">{'<Button btnType="primary">Primary</Button>'}</p>

          <br />

          <h3>Call to Action Button:</h3>
          <Button btnType="cta">Call to Action</Button>
          <p className="code">{'<Button btnType="cta">Call to Action</Button>'}</p>


          <br />

          <h3>Disabled Button:</h3>
          <Button disabled>Disabled</Button>
          <p className="code">{'<Button disabled>Disabled</Button>'}</p>

          <br />

          <h3>Primary Disabled Button:</h3>
          <Button btnType="primary" disabled>Primary Disabled</Button>
          <p className="code">{'<Button btnType="primary" disabled>Disabled</Button>'}</p>

          <br />

          <h3>Small Button:</h3>
          <Button btnSize="small">Small</Button>
          <p className="code">{'<Button btnSize="small">Small</Button>'}</p>

          <br />

          <h3>Large Button:</h3>
          <Button btnSize="large">Large</Button>
          <p className="code">{'<Button btnSize="large">Large</Button>'}</p>

          <br />

          <h3>XLarge Button:</h3>
          <Button btnSize="xlarge">XLarge</Button>
          <p className="code">{'<Button btnSize="xlarge">XLarge</Button>'}</p>

          <br />

          <h3>Primary XLarge Button:</h3>
          <Button btnType="primary" btnSize="xlarge">Primary XLarge</Button>
          <p className="code">{'<Button btnType="primary" btnSize="xlarge">XLarge</Button>'}</p>
        </div>

      </div>
    )


export default ButtonPage;
