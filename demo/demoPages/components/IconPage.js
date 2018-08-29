import React            from 'react';
import { Icon, Button } from '../../../index';


const IconPage = () => (
      <div className="displaySection">
        <h2><a href="https://pearson-higher-ed.github.io/design/c/icons/beta">Icons</a></h2>

        <div className="elementContainer">

          <div className="code">
            <h3>Props:</h3>
            <ul>
              <li>name:String === "remove-sm-18"</li>
            </ul>
          </div>

          <h3>Examples</h3>
          <p>Note: the "name" string sets the appropriate CSS class to show the correct icon. Additionally, to give the icon alternative text for screen reader users, type any string between the Icon tags.</p>
          <h4>Basic Icon without alt text:</h4>
          <Icon name="remove-sm-18"/>
          <p className="code">{"<Icon name='remove-sm-18'/>"}</p>

          <br />

          <h4>Basic Icon with alt text "close":</h4>
          <Icon name="remove-sm-18">close</Icon>
          <p className="code">{"<Icon name='remove-sm-18'>close</Icon>"}</p>

          <br />


          <h4>This is "remove-sm-18" inside a button, with the alt text "close":</h4>
          <Button btnType="primary"><Icon name="remove-sm-18">close</Icon></Button>
          <p className="code">{"<Button btnType='primary'><Icon name='remove-sm-18'>close</Icon></Button>"}</p>

          <br/>

          <h4>This is "warning-24" inside a heading as a decorative (no alt text) icon:</h4>
          <div className="warning">
            <h2><Icon name="warning-24" /> Alert! Form was not submitted!</h2>
          </div>
          <p className="code">{"<h2><Icon name='warning-24'/> Alert! Form was not submitted!</h2>"}</p>

          <br/>

          <h3>Available icons</h3>
          <p>These are icons with their names inside as example alternative text.</p>
          <ul>
            <li><Icon name="archive-18">Archive 18</Icon> archive-18</li>
            <li><Icon name="archive-24">Archive 24</Icon> archive-24</li>
            <li><Icon name="audio-high-18">Audio High 18</Icon> audio-high-18</li>
            <li><Icon name="audio-high-24">Audio High 24</Icon> audio-high-24</li>
            <li><Icon name="audio-low-18">Audio Low 18</Icon> audio-low-18</li>
            <li><Icon name="audio-low-24">Audio Low 24</Icon> audio-low-24</li>
            <li><Icon name="audio-off-18">Audio Off 18</Icon> audio-off-18</li>
            <li><Icon name="audio-off-24">Audio Off 24</Icon> audio-off-24</li>
            <li><Icon name="ban-18">Ban 18</Icon> ban-18</li>
            <li><Icon name="ban-24">Ban 24</Icon> ban-24</li>
            <li><Icon name="book-18">Book 18</Icon> book-18</li>
            <li><Icon name="book-24">Book 24</Icon> book-24</li>
            <li><Icon name="bookmark-off-18">Bookmark Off 18</Icon> bookmark-off-18</li>
            <li><Icon name="bookmark-off-24">Bookmark Off 24</Icon> bookmark-off-24</li>
            <li><Icon name="bookmark-on-18">Bookmark On 18</Icon> bookmark-on-18</li>
            <li><Icon name="bookmark-on-24">Bookmark On 24</Icon> bookmark-on-24</li>
            <li><Icon name="breadcrumb-18">Breadcrumb 18</Icon> breadcrumb-18</li>
            <li><Icon name="breadcrumb-24">Breadcrumb 24</Icon> breadcrumb-24</li>
            <li><Icon name="calendar-18">Calendar 18</Icon> calendar-18</li>
            <li><Icon name="calendar-24">Calendar 24</Icon> calendar-24</li>
            <li><Icon name="camera-18">Camera 18</Icon> camera-18</li>
            <li><Icon name="camera-24">Camera 24</Icon> camera-24</li>
            <li><Icon name="camera-video-18">Camera Video 18</Icon> camera-video-18</li>
            <li><Icon name="camera-video-24">Camera Video 24</Icon> camera-video-24</li>
            <li><Icon name="capslock-18">Capslock 18</Icon> capslock-18</li>
            <li><Icon name="capslock-24">Capslock 24</Icon> capslock-24</li>
            <li><Icon name="check-lg-18">Check Lg 18</Icon> check-lg-18</li>
            <li><Icon name="check-lg-24">Check lg 24</Icon> check-lg-24</li>
            <li><Icon name="check-sm-18">Check sm 18</Icon> check-sm-18</li>
            <li><Icon name="check-sm-24">Check sm 24</Icon> check-sm-24</li>
            <li><Icon name="checkbox-off-18">Checkbox Off 18</Icon> checkbox-off-18</li>
            <li><Icon name="checkbox-off-24">Checkbox Off 24</Icon> checkbox-off-24</li>
            <li><Icon name="checkbox-on-18">Checkbox On 18</Icon> checkbox-on-18</li>
            <li><Icon name="checkbox-on-24">Checkbox On 24</Icon> checkbox-on-24</li>
            <li><Icon name="checkbox-tristate-18">Checkbox Tristate 18</Icon> checkbox-tristate-18</li>
            <li><Icon name="checkbox-tristate-24">Checkbox Tristate 24</Icon> checkbox-tristate-24</li>
            <li><Icon name="chevron-back-sm-18">Small Chevron Back 18</Icon> chevron-back-sm-18</li>
            <li><Icon name="chevron-back-sm-24">Small Chevron Back 24</Icon> chevron-back-sm-24</li>
            <li><Icon name="chevron-next-sm-18">Small Chevron Next 18</Icon> chevron-next-sm-18</li>
            <li><Icon name="chevron-next-sm-24">Small Chevron Next 24</Icon> chevron-next-sm-24</li>
            <li><Icon name="chevron-back-18">Chevron Back 18</Icon> chevron-back-18</li>
            <li><Icon name="chevron-back-24">Chevron Back 24</Icon> chevron-back-24</li>
            <li><Icon name="chevron-next-18">Chevron Next 18</Icon> chevron-next-18</li>
            <li><Icon name="chevron-next-24">Chevron Next 24</Icon> chevron-next-24</li>
            <li><Icon name="clock-18">Clock 18</Icon> clock-18</li>
            <li><Icon name="clock-24">Clock 24</Icon> clock-24</li>
            <li><Icon name="delete-18">Delete 18</Icon> delete-18</li>
            <li><Icon name="delete-24">Delete 24</Icon> delete-24</li>
            <li><Icon name="desktop-18">Desktop 18</Icon> desktop-18</li>
            <li><Icon name="desktop-24">Desktop 24</Icon> desktop-24</li>
            <li><Icon name="dropdown-close-sm-18">Small Dropdown Close 18</Icon> dropdown-close-sm-18</li>
            <li><Icon name="dropdown-close-sm-24">Small Dropdown Close 24</Icon> dropdown-close-sm-24</li>
            <li><Icon name="dropdown-open-sm-18">Small Dropdown Open 18</Icon> dropdown-open-sm-18</li>
            <li><Icon name="dropdown-open-sm-24">Small Dropdown Open 24</Icon> dropdown-open-sm-24</li>
            <li><Icon name="dropdown-close-18">Dropdown Close 18</Icon> dropdown-close-18</li>
            <li><Icon name="dropdown-close-24">Dropdown Close 24</Icon> dropdown-close-24</li>
            <li><Icon name="dropdown-open-18">Dropdown Open 18</Icon> dropdown-open-18</li>
            <li><Icon name="dropdown-open-24">Dropdown Open 24</Icon> dropdown-open-24</li>
            <li><Icon name="edit-18">Edit 18</Icon> ellipsis-18</li>
            <li><Icon name="edit-24">Edit 24</Icon> ellipsis-24</li>
            <li><Icon name="ellipsis-18">Ellipsis 18</Icon> ellipsis-18</li>
            <li><Icon name="ellipsis-24">Ellipsis 24</Icon> ellipsis-24</li>
            <li><Icon name="email-18">Email 18</Icon> email-18</li>
            <li><Icon name="email-24">Email 24</Icon> email-24</li>
            <li><Icon name="favorite-off-18">Favorite Off 18</Icon> favorite-off-18</li>
            <li><Icon name="favorite-off-24">Favorite Off 24</Icon> favorite-off-24</li>
            <li><Icon name="favorite-on-18">Favorite On 18</Icon> favorite-on-18</li>
            <li><Icon name="favorite-on-24">Favorite Off 24</Icon> favorite-on-24</li>
            <li><Icon name="file-18">File 18</Icon> file-18</li>
            <li><Icon name="file-24">File 24</Icon> file-24</li>
            <li><Icon name="font-sm-18">Small Font 18</Icon> font-sm-18</li>
            <li><Icon name="font-sm-24">Small Font 24</Icon> font-sm-24</li>
            <li><Icon name="font-setting-18">Font Setting 18</Icon> font-setting-18</li>
            <li><Icon name="font-setting-24">Font Setting 24</Icon> font-setting-24</li>
            <li><Icon name="font-lg-18">Large Font 18</Icon> font-lg-18</li>
            <li><Icon name="font-lg-24">Large Font 24</Icon> font-lg-24</li>
            <li><Icon name="group-18">Group 18</Icon> group-18</li>
            <li><Icon name="group-24">Group 24</Icon> group-24</li>
            <li><Icon name="help-fill-18">Help Fill 18</Icon> help-fill-18</li>
            <li><Icon name="help-fill-24">Help Fill 24</Icon> help-fill-24</li>
            <li><Icon name="help-outline-18">Help Outline 18</Icon> help-outline-18</li>
            <li><Icon name="help-outline-24">Help Outline 24</Icon> help-outline-24</li>
            <li><Icon name="image-18">Image 18</Icon> image-18</li>
            <li><Icon name="image-24">Image 24</Icon> image-24</li>
            <li><Icon name="info-fill-18">Info Fill 18</Icon> info-fill-18</li>
            <li><Icon name="info-fill-24">Info Fill 24</Icon> info-fill-24</li>
            <li><Icon name="info-outline-18">Info Outline 18</Icon> info-outline-18</li>
            <li><Icon name="info-outline-24">Info Outline 24</Icon> info-outline-24</li>
            <li><Icon name="item-add-18">Item Add 18</Icon> item-add-18</li>
            <li><Icon name="item-add-24">Item Add 24</Icon> item-add-24</li>
            <li><Icon name="item-remove-18">Item Remove 18</Icon> item-remove-18</li>
            <li><Icon name="item-remove-24">Item Remove 24</Icon> item-remove-24</li>
            <li><Icon name="lock-close-18">Lock Close 18</Icon> lock-close-18</li>
            <li><Icon name="lock-close-24">Lock Close 24</Icon> lock-close-24</li>
            <li><Icon name="lock-open-18">Lock Open 18</Icon> lock-open-18</li>
            <li><Icon name="lock-open-24">Lock Open 24</Icon> lock-open-24</li>
            <li><Icon name="new-notification-9">New Notification 9</Icon> new-notification-9</li>
            <li><Icon name="note-18">Note 18</Icon> note-18</li>
            <li><Icon name="note-24">Note 24</Icon> note-24</li>
            <li><Icon name="notification-18">Notification 18</Icon> notification-18</li>
            <li><Icon name="notification-24">Notification 24</Icon> notification-24</li>
            <li><Icon name="pause-18">Pause 18</Icon> pause-18</li>
            <li><Icon name="pause-24">Pause 24</Icon> pause-24</li>
            <li><Icon name="person-18">Person 18</Icon> person-18</li>
            <li><Icon name="person-24">Person 24</Icon> person-24</li>
            <li><Icon name="pivot-close-18">Pivot Close 18</Icon> pivot-close-18</li>
            <li><Icon name="pivot-close-24">Pivot Close 24</Icon> pivot-close-24</li>
            <li><Icon name="pivot-open-18">Pivot Open 18</Icon> pivot-open-18</li>
            <li><Icon name="pivot-open-24">Pivot Open 24</Icon> pivot-open-24</li>
            <li><Icon name="play-18">Play 18</Icon> play-18</li>
            <li><Icon name="play-24">Play 24</Icon> play-24</li>
            <li><Icon name="point-back-18">Point Back 18</Icon> point-back-18</li>
            <li><Icon name="point-back-24">Point Back 24</Icon> point-back-24</li>
            <li><Icon name="point-next-18">Point Next 18</Icon> point-next-18</li>
            <li><Icon name="point-next-24">Point Next 24</Icon> point-next-24</li>
            <li><Icon name="print-18">Print 18</Icon> print-18</li>
            <li><Icon name="print-24">Print 24</Icon> print-24</li>
            <li><Icon name="radio-button-off-18">Radio Button Off 18</Icon> radio-button-off-18</li>
            <li><Icon name="radio-button-off-24">Radio Button Off 24</Icon> radio-button-off-24</li>
            <li><Icon name="radio-button-on-18">Radio Button On 18</Icon> radio-button-on-18</li>
            <li><Icon name="radio-button-on-24">Radio Button On 24</Icon> radio-button-on-24</li>
            <li><Icon name="remove-sm-18">Small Remove 18</Icon> remove-sm-18</li>
            <li><Icon name="remove-sm-24">Small Remove 24</Icon> remove-sm-24</li>
            <li><Icon name="remove-lg-18">Large Remove 18</Icon> remove-lg-18</li>
            <li><Icon name="remove-lg-24">Large Remove 24</Icon> remove-lg-24</li>
            <li><Icon name="screen-full-18">Screen Full 18</Icon> screen-full-18</li>
            <li><Icon name="screen-full-24">Screen Full 24</Icon> screen-full-24</li>
            <li><Icon name="screen-minimize-18">Screen Minimize 18</Icon> screen-minimize-18</li>
            <li><Icon name="screen-minimize-24">Screen Minimize 24</Icon> screen-minimize-24</li>
            <li><Icon name="search-sm-18">Small Search 18</Icon> search-sm-18</li>
            <li><Icon name="search-sm-24">Small Search 24</Icon> search-sm-24</li>
            <li><Icon name="search-lg-18">Large Seach 18</Icon> search-lg-18</li>
            <li><Icon name="search-lg-24">Large Seach 24</Icon> search-lg-24</li>
            <li><Icon name="settings-18">Settings 18</Icon> settings-18</li>
            <li><Icon name="settings-24">Settings 24</Icon> settings-24</li>
            <li><Icon name="show-off-18">Show Off 18</Icon> show-off-18</li>
            <li><Icon name="show-off-24">Show Off 24</Icon> show-off-24</li>
            <li><Icon name="show-on-18">Show On 18</Icon> show-on-18</li>
            <li><Icon name="show-on-24">Show On 24</Icon> show-on-24</li>
            <li><Icon name="sortable-18">Sort 18</Icon> sortable-18</li>
            <li><Icon name="sortable-24">Sort 24</Icon> sortable-24</li>
            <li><Icon name="sort-up-18">Sort Up 18</Icon> sort-up-18</li>
            <li><Icon name="sort-up-24">Sort Up 24</Icon> sort-up-24</li>
            <li><Icon name="sort-down-18">Sort Down 18</Icon> sort-down-18</li>
            <li><Icon name="sort-down-24">Sort Down 24</Icon> sort-down-24</li>
            <li><Icon name="tip-18">Tip 18</Icon> tip-18</li>
            <li><Icon name="tip-24">Tip 24</Icon> tip-24</li>
            <li><Icon name="view-list-18">View List 18</Icon> view-list-18</li>
            <li><Icon name="view-list-24">View List 24</Icon> view-list-24</li>
            <li><Icon name="view-tile-18">View Tile 18</Icon> view-tile-18</li>
            <li><Icon name="view-tile-24">View Tile 24</Icon> view-tile-24</li>
            <li><Icon name="warning-18">Warning 18</Icon> warning-18</li>
            <li><Icon name="warning-24">Warning  24</Icon> warning-24</li>
            <li><Icon name="zoom-in-18">Zoom In 18</Icon> zoom-in-18</li>
            <li><Icon name="zoom-in-24">Zoom In 24</Icon> zoom-in-24</li>
            <li><Icon name="zoom-out-18">Zoom Out 18</Icon> zoom-out-18</li>
            <li><Icon name="zoom-out-24">Zoom Out 24</Icon> zoom-out-24</li>
            <li><Icon name="file-word-18">File Word 18</Icon> file-word-18</li>
            <li><Icon name="file-word-24">File Word 24</Icon> file-word-24</li>
            <li><Icon name="file-powerpoint-18">File PowerPoint 18</Icon> file-powerpoint-18</li>
            <li><Icon name="file-powerpoint-24">File PowerPoint 24</Icon> file-powerpoint-24</li>
            <li><Icon name="file-pdf-18">File PDF 18</Icon> file-pdf-18</li>
            <li><Icon name="file-pdf-24">File PDF 24</Icon> file-pdf-24</li>
            <li><Icon name="file-excel-18">File Excel 18</Icon> file-excel-18</li>
            <li><Icon name="file-excel-24">File Excel 24</Icon> file-excel-24</li>
            <li><Icon name="adobe-acrobat-18">Adobe Acrobat 18</Icon> adobe-acrobat-18</li>
            <li><Icon name="adobe-acrobat-24">Adobe Acrobat 24</Icon> adobe-acrobat-24</li>
            <li><Icon name="upload-18">Upload 18</Icon> upload-18</li>
            <li><Icon name="upload-24">Upload 24</Icon> upload-24</li>
            <li><Icon name="download-18">Download 18</Icon> download-18</li>
            <li><Icon name="download-24">Download 24</Icon> download-24</li>
            <li><Icon name="shopping-cart-18">Shopping Cart 18</Icon> shopping-cart-18</li>
            <li><Icon name="shopping-cart-24">Shopping Cart 24</Icon> shopping-cart-24</li>
            <li><Icon name="comment-18">Comment 18</Icon> comment-18</li>
            <li><Icon name="comment-24">Comment 24</Icon> comment-24</li>
            <li><Icon name="warning-sm-18">Warning 18</Icon> warning-sm-18</li>
            <li><Icon name="warning-sm-24">Warning 24</Icon> warning-sm-24</li>
            <li><Icon name="text-bold-18">Text bold 18</Icon> text-bold-18</li>
            <li><Icon name="text-bold-24">Text bold 24</Icon> text-bold-24</li>
            <li><Icon name="text-italic-18">Text italic 18</Icon> text-italic-18</li>
            <li><Icon name="text-italic-24">Text italic 24</Icon> text-italic-24</li>
            <li><Icon name="attachment-18">Attachment 18</Icon> attachment-18</li>
            <li><Icon name="attachment-24">Attachment 24</Icon> attachment-24</li>
            <li><Icon name="number-list-18">Number list 18</Icon> number-list-18</li>
            <li><Icon name="number-list-24">Number list 24</Icon> number-list-24</li>
            <li><Icon name="link-18">Link 18</Icon> link-18</li>
            <li><Icon name="link-24">Link 24</Icon> link-24</li>
            <li><Icon name="link-out-18">Link out 18</Icon> link-out-18</li>
            <li><Icon name="link-out-24">Link out 24</Icon> link-out-24</li>
            <li><Icon name="achieved-check-18"> Achieved Check 18</Icon> achieved-check-18</li>
            <li><Icon name="achieved-check-24"> Achieved Check 24</Icon> achieved-check-24</li>
            <li><Icon name="circle-bullet-18"> Circle Bullet 18</Icon> circle-bullet-18</li>
            <li><Icon name="circle-bullet-24"> Circle Bullet 24</Icon> circle-bullet-24</li>
            <li><Icon name="dot-18"> Dot 18</Icon> dot-18</li>
            <li><Icon name="dot-24"> Dot 24</Icon> dot-24</li>
            <li><Icon name="eye-18"> Eye 18</Icon> eye-18</li>
            <li><Icon name="eye-24"> Eye 24</Icon> eye-24</li>
            <li><Icon name="incorrect-18"> Incorrect 18</Icon> incorrect-18</li>
            <li><Icon name="incorrect-24"> Incorrect 24</Icon> incorrect-24</li>
            <li><Icon name="infinity-18"> Infinity 18</Icon> infinity-18</li>
            <li><Icon name="infinity-24"> Infinity 24</Icon> infinity-24</li>
            <li><Icon name="information-18"> Information 18</Icon> information-18</li>
            <li><Icon name="information-24"> Information 24</Icon> information-24</li>
            <li><Icon name="popin-18"> Pop In 18</Icon> popin-18</li>
            <li><Icon name="popin-24"> Pop In 24</Icon> popin-24</li>
            <li><Icon name="popout-18"> Pop Out 18</Icon> popout-18</li>
            <li><Icon name="popout-24"> Pop Out 24</Icon> popout-24</li>
            <li><Icon name="star-18"> Star 18</Icon> star-18</li>
            <li><Icon name="star-24"> Star 24</Icon> star-24</li>
            <li><Icon name="star-outline-18">Star outline 18</Icon> star-outline-18</li>
            <li><Icon name="star-outline-24">Star outline 24</Icon> star-outline-24</li>
            <li><Icon name="file-zip-18">File zip 18</Icon> file-zip-18</li>
            <li><Icon name="file-zip-24">File zip 24</Icon> file-zip-24</li>
            <li><Icon name="label-18">Label 18</Icon> label-18</li>
            <li><Icon name="label-24">Label 24</Icon> label-24</li>
            <li><Icon name="drag-handle-18">Drag handle 18</Icon> drag-handle-18</li>
            <li><Icon name="drag-handle-24">Drag handle 24</Icon> drag-handle-24</li>
          </ul>
        </div>
      </div>
    )


export default IconPage;
