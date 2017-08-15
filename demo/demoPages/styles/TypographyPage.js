import React from 'react';

const eight = {paddingLeft: 8};
const sixtn = {paddingLeft: 16};
const twntyfr = {paddingLeft: 24};
const thrtytwo = {paddingLeft: 32};
const forty = {paddingLeft: 40};

const TypographyPage = () => (
  <div style={{padding: 14}}>
    <h1>Typography</h1>

    <h2>Headings</h2>

    <p>Content headings, used to delineate the outline of a page. If there is a need to have a subheading, use a `header` element, with a `p.subtitle` to hold the subtitle, as illustrated below.</p>

    <h1>H1 Heading</h1>
    <h2>H2 Heading</h2>
    <h3>H3 Heading</h3>
    <h4>H4 Heading</h4>
    <h5>H5 Heading</h5>
    <h6>H6 Heading</h6>

    <p className="code">
      {`<h1>H1 Heading</h1>`} <br/>
      {`<h2>H2 Heading</h2>`} <br/>
      {`<h3>H3 Heading</h3>`} <br/>
      {`<h4>H4 Heading</h4>`} <br/>
      {`<h5>H5 Heading</h5>`} <br/>
      {`<h6>H6 Heading</h6>`}
    </p>

    <h3>Subtitles</h3>

    <header>
  	  <h1>Title Element 1</h1>
    	<p className="subtitle">Subtitle, sized based on the preceding element</p>
    </header>
    <header>
    	<h2>Title Element 2</h2>
    	<p className="subtitle">Subtitle, sized based on the preceding element</p>
    </header>
    <header>
    	<h3>Title Element 3</h3>
    	<p className="subtitle">Subtitle, sized based on the preceding element</p>
    </header>
    <header>
    	<h4>Title Element 4</h4>
    	<p className="subtitle">Subtitle, sized based on the preceding element</p>
    </header>
    <header>
    	<h5>Title Element 5</h5>
    	<p className="subtitle">Subtitle, sized based on the preceding element</p>
    </header>

    <p className="code">
      {`<header>`} <br/>
      	<div style={eight}>{`<h1>Title Element 1</h1>`}</div>
      	<div style={eight}>{`<p class="subtitle">Subtitle, sized based on the preceding element</p>`}</div>
      {`</header>`} <br/>
      {`<header>`} <br/>
      	<div style={eight}>{`<h2>Title Element 2</h2>`}</div>
      	<div style={eight}>{`<p class="subtitle">Subtitle, sized based on the preceding element</p>`}</div>
      {`</header>`} <br/>
      {`<header>`} <br/>
      	<div style={eight}>{`<h3>Title Element 3</h3>`}</div>
      	<div style={eight}>{`<p class="subtitle">Subtitle, sized based on the preceding element</p>`}</div>
      {`</header>`} <br/>
      {`<header>`} <br/>
      	<div style={eight}>{`<h4>Title Element 4</h4>`}</div>
      	<div style={eight}>{`<p class="subtitle">Subtitle, sized based on the preceding element</p>`}</div>
      {`</header>`} <br/>
      {`<header>`} <br/>
      	<div style={eight}>{`<h5>Title Element 5</h5>`}</div>
      	<div style={eight}>{`<p class="subtitle">Subtitle, sized based on the preceding element</p>`}</div>
      {`</header>`} <br/>

    </p>

    <h2>Paragraphs</h2>

    <p>Paragraphs should naturally have the default body copy styles, but if they inherit other styles, the `pe-paragraph` class references them as well. The final paragraph of a block of content should have no bottom margin, which can be set using the `pe-paragraph--last` class.</p>

    <p>This style also represents the basic body copy styles for a document.</p>

    <div style={{padding: 8}}>
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.
      </p>

      <p>
        Cogito sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
      </p>

      <p className="pe-paragraph--last">
        Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id
        elit non mi porta gravida at eget metus. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      </p>
    </div>

    <p className="code">
      {`<p>`} <br/>
        {`Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.`} <br/>
      {`</p>`} <br/> <br/>

      {`<p>`} <br/>
        {`Cogito sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis
        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.`} <br/>
      {`</p>`} <br/> <br/>

      {`<p class="pe-paragraph--last">`} <br/>
        {`Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id
        elit non mi porta gravida at eget metus. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`} <br/>
      {`</p>`}
    </p>

    <h3>Smallcopy style</h3>

    <div style={{padding: 8}}>
      <p className="pe-copy pe-copy--small">
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.
      </p>

      <p className="pe-copy pe-copy--small pe-paragraph--last">
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.
      </p>
    </div>

    <p className="code">
      {`<p class="pe-copy pe-copy--small">`} <br/>
        {`Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.`} <br/>
      {`</p>`} <br/><br/>

      {`<p class="pe-copy pe-copy--small pe-paragraph--last">`} <br/>
        {`Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.`} <br/>
      {`</p>`}
    </p>

    <h3>Large copy style</h3>

    <div style={{padding: 8}}>
      <p className="pe-copy pe-copy--large">
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.
      </p>
    </div>

    <p className="code">
      {`<p class="pe-copy pe-copy--large">`} <br/>
        {`Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.`} <br/>
      {`</p>`}
    </p>

    <h3>Secondary color copy style</h3>

    <div style={{padding: 8}}>
      <p class="pe-copy pe-copy--secondary">
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.
      </p>
    </div>

    <p className="code">
      {`<p class="pe-copy pe-copy--secondary">`} <br/>
        {`Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam
        id dolor id nibh ultricies vehicula.`} <br/>
      {`</p>`}
    </p>

    <h2>Leads</h2>

    <p>A lead paragraph or sentence introduces and guides the user into the primary content.</p>

    <p className="pe-lead">It was the best of times, it was the worst of times&hellip;</p>
    <p>
      &hellip;it was the age of wisdom, it was the age of foolishness, it was
      the epoch of belief, it was the epoch of incredulity, it was the season
      of Light, it was the season of Darkness, it was the spring of hope, it
      was the winter of despair, we had everything before us, we had nothing
      before us, we were all going direct to Heaven, we were all going direct
      the other way&mdash;in short, the period was so far like the present period,
      that some of its noisiest authorities insisted on its being received,
      for good or for evil, in the superlative degree of comparison only.
    </p>

    <p className="code">
      {`<p class="pe-lead">It was the best of times, it was the worst of times&hellip;</p>`} <br/>
      {`<p>`} <br/>
        {`&hellip;it was the age of wisdom, it was the age of foolishness, it was
        the epoch of belief, it was the epoch of incredulity, it was the season
        of Light, it was the season of Darkness, it was the spring of hope, it
        was the winter of despair, we had everything before us, we had nothing
        before us, we were all going direct to Heaven, we were all going direct
        the other way&mdash;in short, the period was so far like the present period,
        that some of its noisiest authorities insisted on its being received,
        for good or for evil, in the superlative degree of comparison only.`} <br/>
      {`</p>`}
    </p>

    <h2>UI Page Headings</h2>

    <p>Page-level UI headings. Basic and smaller sizing for page level titles is available.</p>

    <h1 className="pe-page-title">Page Level Heading</h1>
    <h1 className="pe-page-title pe-page-title--secondary">Secondary Color Page Level Heading</h1>

    <p className="code">
      {`<h1 class="pe-page-title">Page Level Heading</h1>`} <br/>
      {`<h1 class="pe-page-title pe-page-title--secondary">Secondary Color Page Level Heading</h1>`}
    </p>

    <h1 className="pe-page-title pe-page-title--small">Small Page Level Heading</h1>
    <h1 className="pe-page-title pe-page-title--small pe-page-title--secondary">Secondary Color Small Page Level Heading</h1>

    <p className="code">
      {`<h1 class="pe-page-title pe-page-title--small">Small Page Level Heading</h1>`} <br/>
      {`<h1 class="pe-page-title pe-page-title--small pe-page-title--secondary">Secondary Color Small Page Level Heading</h1>`}
    </p>

    <h2>UI Section Headings</h2>

    <p>Note that UI Section Headings are going to be "heading" content, so most if not all of the time, they will be heading elements. Use the `pe-title` class for this UI Section Headings style.</p>

    <h3 className="pe-title">Default UI Section Headings</h3>
    <h3 className="pe-heading-level3">Bold UI Section Headings (h3 example)</h3>
    <h3 className="pe-title pe-bold">non-h3 Bold UI Section Headings</h3>
    <h3 className="pe-title pe-title--secondary">Secondary Color Default UI Section Headings</h3>

    <p className="code">
      {`<h3 class="pe-title">Default UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-heading-level3">Bold UI Section Headings (h3 example)</h3>`} <br/>
      {`<h3 class="pe-title pe-bold">non-h3 Bold UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--secondary">Secondary Color Default UI Section Headings</h3>`}
    </p>

    <h3>Sizes</h3>

    <p>Titles can be larger or smaller for additional emphasis. Note: pe-title--extra-large has been deprecated in v1 Elements.</p>

    <h3 className="pe-title pe-title--small">Small UI Section Headings</h3>
    <h3 className="pe-title pe-title--small pe-bold">Small and Bold UI Section Headings</h3>
    <h3 className="pe-title pe-title--small pe-title--secondary">Secondary Color Small UI Section Headings</h3>
    <h3 className="pe-title pe-title--large">Large UI Section Headings</h3>
    <h3 className="pe-title pe-title--large pe-bold">Large and bold UI Section Headings</h3>
    <h3 className="pe-title pe-title--large pe-title--secondary">Secondary Color Large UI Section Headings</h3>

    <p className="code">
      {`<h3 class="pe-title pe-title--small">Small UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--small pe-bold">Small and Bold UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--small pe-title--secondary">Secondary Color Small UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--large">Large UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--large pe-bold">Large and bold UI Section Headings</h3>`} <br/>
      {`<h3 class="pe-title pe-title--large pe-title--secondary">Secondary Color Large UI Section Headings</h3>`}
    </p>

    <h2>UI Text</h2>

    <p>Note these are not related to form element labels (use the HTML `label` element for those). This was remapped from a "label" in v0 to a "UI Text" in v1. The markup remains the same as in v0.</p>

    <div className="pe-label">Default UI Text</div>
    <div className="pe-label pe-label--secondary">Secondary UI Text</div>
    <div className="pe-label pe-bold">Bold UI Text</div>

    <p className="code">
      {`<div class="pe-label">Default UI Text</div>`} <br/>
      {`<div class="pe-label pe-label--secondary">Secondary UI Text</div>`} <br/>
      {`<div class="pe-label pe-bold">Bold UI Text</div>`} <br/>
    </p>

    <h3>Sizes</h3>

    <p>UI text can be smaller or larger than the default.</p>

    <div className="pe-label pe-label--small">Small UI Text</div>
    <div className="pe-label pe-label--small pe-label--secondary">Small UI Text secondary color</div>
    <div className="pe-label pe-label--large">Large UI Text</div>
    <div className="pe-label pe-label--large pe-label--secondary">Large UI Text secondary color</div>

    <p className="code">
      {`<div class="pe-label pe-label--small">Small UI Text</div>`} <br/>
      {`<div class="pe-label pe-label--small pe-label--secondary">Small UI Text secondary color</div>`} <br/>
      {`<div class="pe-label pe-label--large">Large UI Text</div>`} <br/>
      {`<div class="pe-label pe-label--large pe-label--secondary">Large UI Text secondary color</div>`}
    </p>

    <h3>Inverse</h3>

    <p>When UI Text is used on a dark background, use `pe-label--inverse` to make it visible.</p>

    <div style={{backgroundColor: '#000'}}>
      <div className="pe-label pe-label--inverse">Inverse UI Text</div>
      <div className="pe-label pe-label--secondary pe-label--inverse">Inverse secondary UI Text</div>
    </div>

    <p className="code">
      {`<div style="background-color: #000">`} <br/>
        <div style={eight}>{`<div class="pe-label pe-label--inverse">Inverse UI Text</div>`}</div>
        <div style={eight}>{`<div class="pe-label pe-label--secondary pe-label--inverse">Inverse secondary UI Text</div>`}</div>
      {`</div>`}
    </p>

    <h2>Inline text</h2>

    <p>Use the {`<abbr>`}, {`<ins>`}, {`<del>`}, {`<s>`}, {`<mark>`}, {`<em>`}, {`<strong>`}, {`<sub>`}, {`<sup>`} and {`<q>`} elements to indicate contextual changes or differences within a string of text.</p>

    <h3>{`<abbr>`}</h3>

    <p>The {`<abbr>`} element represents an abbreviation.</p>

    <p>
      Basic elements are the backbone of any
      <abbr title="HyperText Markup Language">HTML</abbr> document.
    </p>

    <p className="code">
      {`<p>`} <br/>
        <div style={eight}>{`Basic elements are the backbone of any`}</div>
        <div style={eight}>{`<abbr title="HyperText Markup Language">HTML</abbr> document.`}</div>
      {`</p>`}
    </p>

    <h3>{`<ins>`}, {`<del>`}</h3>

    <p>The {`<ins>`} and {`<del>`} elements represent text that has been inserted and deleted, respectively.</p>

    <p>It was the best of times, it was the <del>blurst</del><ins>worst</ins> of times&hellip;</p>

    <p className="code">
      {`<p>It was the best of times, it was the <del>blurst</del><ins>worst</ins> of times&hellip;</p>`}
    </p>

    <h3>{`<s>`}</h3>

    <p>The {`<s>`} (strikethrough) element should be used to indicate text that is no longer relevant or accurate.</p>

    <p>
      Support is provided for the latest versions of Chrome, Firefox,
      and Internet Explorer<s>, and IE versions 7 and 8</s>.
    </p>

    <p className="code">
      {`<p>`} <br/>
        {`Support is provided for the latest versions of Chrome, Firefox,
        and Internet Explorer<s>, and IE versions 7 and 8</s>.`} <br/>
      {`</p>`}
    </p>

    <h3>{`<mark>`}</h3>

    <p>Use the {`<mark>`} element to highlight text.</p>

    <p>The latest report shows that <mark>profits have increased by 15%</mark> over the previous year.</p>

    <p className="code">
    {`<p>The latest report shows that <mark>profits have increased by 15%</mark> over the previous year.</p>`}
    </p>

    <h3>{`<em>`}</h3>

    <p>Use the {`<em>`} element to emphasize a word, phrase, or other part of the text.</p>

    <p>I think carrots are ok, but I <em>love</em> beets.</p>

    <p className="code">
    {`<p>I think carrots are ok, but I <em>love</em> beets.</p>`}
    </p>

    <h3>{`<strong>`}</h3>

    <p>Use the {`<strong>`} element when you want to give text strong importance with respect to other text in the same context.</p>

    Use <kbd>rm -rf</kbd> to recursively remove files. <strong>Be careful when using
    <code>-f</code> because it will remove files without prompting for confirmation.</strong>

    <p className="code">
    {`Use <kbd>rm -rf</kbd> to recursively remove files. <strong>Be careful when using
    <code>-f</code> because it will remove files without prompting for confirmation.</strong>`}
    </p>

    <aside>
      <h1 class="pe-title">The difference between <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code></h1>
      <p>The <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code> elements are similar. However, bold is a physical state that represents both the content and its presentation, while strong is a logical state that separates the content from its presentation&mdash;it indicates that, in the current context, the text is more important than the surrounding text.</p>
    </aside>

    <h3>{`<sub>`}</h3>

    <p>Use the {`<sub>`} element to lower characters below the font baseline. This is commonly done in mathematical expressions and chemical formulas.</p>

    <p>The main ingredient is H<sub>2</sub>O.</p>

    <p className="code">
    {`<p>The main ingredient is H<sub>2</sub>O.</p>`}
    </p>

    <h3>{`<sup>`}</h3>

    <p>Use the {`<sup>`} element to raise characters above the font baseline. This is not only used exponents, but also for ordinals, the trademark symbol, and atomic charges.</p>

    <p>On December 5<sup>th</sup>, the Dutch celebrate Saint Nicholas&#39; Eve.</p>

    <p className="code">
    {`<p>On December 5<sup>th</sup>, the Dutch celebrate Saint Nicholas' Eve.</p>`}
    </p>

    <h3>{`<q>`}</h3>

    <p>The {`<q>`} element should be used for inline quotations.</p>

    <p>
      <q cite="https://en.wikipedia.org/wiki/Lost_in_Space#Catchphrases">That does not compute</q> is one of several of the Robot&#39;s catchphrases used in the television show <i>Lost in Space</i>.
    </p>

    <p className="code">
      {`<p>`} <br/>
        <div style={eight}>{`<q cite="https://en.wikipedia.org/wiki/Lost_in_Space#Catchphrases">That does not compute</q> is one of several of the Robot&#39;s catchphrases used in the television show <i>Lost in Space</i>.`}</div>
      {`</p>`}
    </p>

    <h2>Code</h2>
    <h3>Inline</h3>

    <p>Use the {`<code>`} element for inline code examples.</p>
    The <code className="pe-code-inline">&lt;section&gt;</code> HTML element represents a section of a document.

    <p className="code">
      {`The <code class="pe-code-inline">&lt;section&gt;</code> HTML element represents a section of a document.`}
    </p>

    <h3>Block</h3>

    <p>A multi-line code block should be wrapper with {`<pre></pre>`} elements.</p>

    <pre class="pe-code"><code>// This is a code example <br/>
    {`  function greet(greeting) {
      console.log(greeting);
    }
    greet('hello, world');`}</code></pre>

    <p className="code">
      {`<pre class="pe-code"><code>// This is a code example`} <br/>
      {`function greet(greeting) {`} <br/>
      {`console.log(greeting);`} <br/>
      {`}`} <br/>
      {`greet('hello, world');</code></pre>`}
    </p>

    <h3>User Input</h3>

    <p>Use the {`<kbd>`} element to represent user input.</p>

    <p>
      To switch directories, type <kbd class="pe-kbd">cd</kbd> followed by the name of the directory.<br/>
      To edit settings, press <kbd class="pe-kbd">ctrl</kbd> + <kbd class="pe-kbd">,</kbd>
    </p>

    <p className="code">
    {`<p>`} <br/>
      {`To switch directories, type <kbd class="pe-kbd">cd</kbd> followed by the name of the directory.<br/>`} <br/>
      {`To edit settings, press <kbd class="pe-kbd">ctrl</kbd> + <kbd class="pe-kbd">,</kbd>`} <br/>
    {`</p>`}
    </p>

    <h2>Lists</h2>
    <h3>Unstyled lists</h3>

    <p>Use `pe-list--unstyled` for plain lists.</p>

    <ul className="pe-list pe-list--unstyled">
      <li>One</li>
      <li>Two</li>
      <li>Three
    	<ul className="pe-list pe-list--unstyled">
    	  <li>Three-One</li>
    	  <li>Three-Two</li>
    	  <li>Three-Three</li>
    	</ul>
      </li>
    </ul>

    <p className="code">
    {`<ul class="pe-list pe-list--unstyled">`} <br/>
      <div style={eight}>{`<li>One</li>`}</div>
      <div style={eight}>{`<li>Two</li>`}</div>
      <div style={eight}>{`<li>Three`}</div>
      <div style={eight}>{`<ul class="pe-list pe-list--unstyled">`}</div>
        <div style={sixtn}>{`<li>Three-One</li>`}</div>
        <div style={sixtn}>{`<li>Three-Two</li>`}</div>
        <div style={sixtn}>{`<li>Three-Three</li>`}</div>
      <div style={eight}>{`</ul>`}</div>
      <div style={eight}>{`</li>`}</div>
    {`</ul>`}
    </p>

    <h3>Nested ordered lists</h3>

    <p>When nested, `pe-styled-lists--ordered` should be added to each {`<ol>`} element.</p>

    <p>
    Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
    </p>
    <ol className="pe-list pe-styled-lists--ordered">
      <li>List item one. How are you doing today? Quite fine, thank you. This is a long, paragraph-style list-item to show the line-height of the copy in the list-item.</li>
      <li>Item two.</li>
      <li>Item three.
        <ol>
          <li>child item one</li>
          <li>child item two
            <ol>
              <li>grand child item one</li>
              <li>grand child item two</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <p>
    And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
    Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
    </p>

    <p className="code">
    {`<p>`} <br/>
    {`Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?`} <br/>
    {`</p>`} <br/>
    {`<ol className="pe-list pe-styled-lists--ordered">`} <br/>
      <div style={eight}>{`<li>List item one. How are you doing today? Quite fine, thank you. This is a long, paragraph-style list-item to show the line-height of the copy in the list-item.</li>`}</div>
      <div style={eight}>{`<li>Item two.</li>`}</div>
      <div style={eight}>{`<li>Item three.`}</div>
        <div style={sixtn}>{`<ol>`}</div>
          <div style={twntyfr}>{`<li>child item one</li>`}</div>
          <div style={twntyfr}>{`<li>child item two`}</div>
            <div style={thrtytwo}>{`<ol>`}</div>
              <div style={forty}>{`<li>grand child item one</li>`}</div>
              <div style={forty}>{`<li>grand child item two</li>`}</div>
            <div style={thrtytwo}>{`</ol>`}</div>
          <div style={twntyfr}>{`</li>`}</div>
        <div style={sixtn}>{`</ol>`}</div>
      <div style={eight}>{`</li>`}</div>
    {`</ol>`} <br/>
    {`<p>`} <br/>
    {`And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.`} <br/>
    {`Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?`} <br/>
    {`</p>`}
    </p>

    <h3>Nested unordered lists</h3>

    <p>When nested, `pe-styled-lists--unordered` should be added to each {`<ul>`} element.</p>

    <p>
    And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
    Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?
    </p>
    <ul className="pe-list pe-styled-lists--unordered">
      <li>List item one. How are you doing today? Quite fine, thank you.</li>
      <li>Item two.</li>
      <li>Item three.
        <ul>
          <li>child item one</li>
          <li>child item two
            <ul>
              <li>grand child item one</li>
              <li>grand child item two</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <p>
    And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.
    </p>

    <p className="code">
    {`<p>`} <br/>
    {`And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.`} <br/>
    {`Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?`} <br/>
    {`</p>`} <br/>
    {`<ul class="pe-list pe-styled-lists--unordered">`} <br/>
      <div style={eight}>{`<li>List item one. How are you doing today? Quite fine, thank you.</li>`}</div>
      <div style={eight}>{`<li>Item two.</li>`}</div>
      <div style={eight}>{`<li>Item three.`}</div>
        <div style={sixtn}>{`<ul>`}</div>
          <div style={twntyfr}>{`<li>child item one</li>`}</div>
          <div style={twntyfr}>{`<li>child item two`}</div>
            <div style={thrtytwo}>{`<ul>`}</div>
              <div style={forty}>{`<li>grand child item one</li>`}</div>
              <div style={forty}>{`<li>grand child item two</li>`}</div>
            <div style={thrtytwo}>{`</ul>`}</div>
          <div style={twntyfr}>{`</li>`}</div>
        <div style={sixtn}>{`</ul>`}</div>
      <div style={eight}>{`</li>`}</div>
    {`</ul>`} <br/>
    {`<p>`} <br/>
    {`And back to the regular copy. Hopefully you are fully prepared for your exams now. At least you have a to do list all set up for you.`} <br/>
    {`</p>`} <br/>
    </p>

    <h3>Nested ordered lists following a heading</h3>

    <p>When nested, `pe-styled-lists-heading--ordered` should be added to each {`<ol>`} element for lists directly under a heading.</p>

    <h2>Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?</h2>
    <ul className="pe-list pe-styled-lists-heading--unordered">
      <li>List item one. How are you doing today? Quite fine, thank you.</li>
      <li>Item two.</li>
      <li>Item three.
        <ul>
          <li>child item one</li>
          <li>child item two
            <ul>
              <li>grand child item one</li>
              <li>grand child item two</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <p className="code">
    {`<h2>Basic body. As you read, quiz yourself to review concepts and prep for exams, without leaving the page. What could be easier?</h2>`} <br/>
    {`<ul class="pe-list pe-styled-lists-heading--unordered">`} <br/>
      <div style={eight}>{`<li>List item one. How are you doing today? Quite fine, thank you.</li>`}</div>
      <div style={eight}>{`<li>Item two.</li>`}</div>
      <div style={eight}>{`<li>Item three.`}</div>
        <div style={sixtn}>{`<ul>`}</div>
          <div style={twntyfr}>{`<li>child item one</li>`}</div>
          <div style={twntyfr}>{`<li>child item two`}</div>
            <div style={thrtytwo}>{`<ul>`}</div>
              <div style={forty}>{`<li>grand child item one</li>`}</div>
              <div style={forty}>{`<li>grand child item two</li>`}</div>
            <div style={thrtytwo}>{`</ul>`}</div>
          <div style={twntyfr}>{`</li>`}</div>
        <div style={sixtn}>{`</ul>`}</div>
      <div style={eight}>{`</li>`}</div>
    {`</ul>`} <br/>
    </p>

    <h2>Links</h2>

    <p>Use a link to represent a user navigational element. For performing an action on the page, such as closing a dialog, use a {`<button>`} element instead.</p>

    <h3>Notes on anchors</h3>

    <p>HTML anchor elements require an `href` attribute. Without it, anchors are not keyboard-focusable. Link text should be clear and actionable; try to avoid text like "click here." Finally, be aware that anchors do not have a disabled state, and setting the disabled attribute on it does nothing.</p>

    <p>For more information, <a href="path/to/account">view your account page</a>.</p>

    <p className="code">
    {`<p>For more information, <a href="path/to/account">view your account page</a>.</p>`}
    </p>



  </div>
);

export default TypographyPage;
