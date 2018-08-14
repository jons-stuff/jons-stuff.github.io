---
title: Jon's Stuff
---
# Jon's Stuff

**6 project highlights from 19 years of web development**

-----

## 1. React + Redux CMS (2018)

<div class='lozenges'>
    <span class='react'>React</span>
    <span class='redux'>Redux</span>
    <span class='webpack'>webpack</span>
    <span class='es6'>es6</span>
    <span class='javascript'>JavaScript</span>
    <span class='front-end'>front-end</span>
    <span class='side-project'>side project</span>
</div>

A 2018 React + Redux reboot of a commercial 2009 jQuery/PHP based CMS platform.

![React-cms Screenshot](/assets/jpeg/react-cms.jpg)

- CMS areas can be built using a series of flexible and composable React components.
- Implements a system to allow Redux reducers/selectors/actions to be reused and bound to different areas of the state tree.
- Takes a functional programming approach using immutable data structures - there's virtually no OOP.

**[Find out more about this project >>](/react-cms.html)** &nbsp; &nbsp;
**[Live demo >>](/react-cms)** &nbsp; &nbsp;
**[Source on Github >>](https://github.com/jons-stuff/react-cms)**

-----

## 2. Aon Hewitt series of JavaScript games (2017)

<div class='lozenges'>
    <span class='vue'>vue.js</span>
    <span class='vue-router'>vue-router</span>
    <span class='webpack'>webpack</span>
    <span class='es6'>es6</span>
    <span class='javascript'>JavaScript</span>
    <span class='corporate'>corporate</span>
    <span class='game'>game</span>
    <span class='php'>PHP</span>
    <span class='full-stack'>full-stack</span>
</div>

![Aon Screenshot](/assets/jpeg/aon.jpg){:class='left' width='250'}

A series of JavaScript games built for Aon Hewitt using vue.js (built with webpack).

One of the games, 'DC Fortunes' was a re-take on the 80s 'Family Fortunes' quiz game but with questions themed around investments and pensions. The quiz was brought to life with animations and sound effects. The questions and leaderboard where loaded from an API serving data managed by an online PHP cms.

The 'Brain Game' (pictured) featured a series of randomly animated letters popping up, a player had to tap the letters to spell a word (with time penalties for any wrong letters). If a player took too long the game would try to make things easier by only popping up the missing letters.  The fastest times were recorded on a leaderboard.

<div class='clear'></div>

-----

## 3. iOS/tvOS 8-bit retro gaming platform (2016)

<div class='lozenges'>
    <span class='ios'>iOS</span>
    <span class='tvos'>tvOS</span>
    <span class='swift'>Swift</span>
    <span class='z80'>Z80 assembly language</span>
    <span class='game'>game</span>
    <span class='app'>app</span>
    <span class='side-project'>side project</span>
</div>

Exploration of how to bring the classic games of the 8-bit era to the touchscreen generation.

![Tapes Screenshot](/assets/jpeg/tapes.jpg)

Featured an immersive 3D menu system (built using the iOS 3D SceneKit framework) to recreate the feel of the original game cassette boxes and their rich inlay artwork. Once a game is selected a short animation shows the cassette box opening to reveal the tape inside.

![Game Screenshot](/assets/jpeg/mm.jpg)
 The games ran in a virtual machine emulating the original 8-bit hardware. The VM was heavily specialised to bridge the gap between the original games written in the 1980s (which were designed to be played on a keyboard) and the modern touchscreen world. One key part of this specialisation was a layer of logic which tracked the state of the game (by watching the contents of various memory locations) and adjusted how touches should be translated into key presses. Likewise, the graphics of the game were also tweaked to better fit the 16:9 ratio found on the iPhone and tvOS (originally the games would've been 4:3). 

This project was a prototype and so not suited for release in the App Store - however it's hoped a web based JavaScript version will be built in the future.

-----

## 4. K2 Corporate Extranet (2013)

<div class='lozenges'>
    <span class='jquery'>jQuery</span>
    <span class='javascript'>JavaScript</span>
    <span class='php'>PHP</span>
    <span class='full-stack'>full-stack</span>
    <span class='corporate'>corporate</span>
    <span class='large-system'>large system</span>
</div>

![K2 Screenshot](/assets/jpeg/k2.jpg)

Extranet for the management of corporate relocations. Built using a bespoke full-stack framework optimised for creating complex input screens. Some screens featured up to 3 nested master/detail relationships which could be freely edited without committing data to the server - this required heavy use of jQuery (with particular attention to avoid the spaghetti code that jQuery projects were infamous for).

This was a very large project which included many custom developments such as:
- A comprehensive reporting suite with JavaScript created graphs and charts
- A full bespoke accounting platform with billing ledgers and pdf exports of sales and purchase invoices
- A custom built instant messaging system
- A system to ensure only one user could edit a form at a time (with a notification sent to the waiting user when the form was available again)

-----

## 5. YooDoo e-learning platform (2009)

<div class='lozenges'>
    <span class='flash'>Flash</span>
    <span class='actionscript'>ActionScript</span>
    <span class='api'>API</span>
    <span class='front-end'>front-end</span>
</div>

![YooDoo Screenshot](/assets/jpeg/cs-yoodoo-website.jpg)

A full e-learning platform built with Flash using ActionScript 3.0. Users studied online courses consisting of videos and quizzes. New courses were unlocked based on the progress of the user.

Microsoft commissioned a port to 'Silverlight' (their Flash competitor) - they planned to use it for providing training for their new NHS infrastructure projects.

Highlights included:
- Lots of 3D animations including a fluid 3D 'cover-flow' style menu which simulated DVD boxes
- A custom video player with chapters and synchronised subtitles/notes
- A series of animated quizzes and games to test the user's knowledge of the subject (with scores sent back to the API)

-----

## 6. Richmond University CMS (2005)

<div class='lozenges'>
    <span class='javascript'>JavaScript</span>
    <span class='asp-net'>ASP.net</span>
    <span class='full-stack'>full-stack</span>
    <span class='corporate'>corporate</span>
    <span class='large-system'>large system</span>
</div>

![Richmond University Screenshot](/assets/jpeg/richmond.jpg)

A custom built CMS platform for the website of an entire university. Thanks to a comprehensive permissions system, different university departments were able to build out their own navigational structure and edit content using a block based cms (similar to the system Medium uses).

The content editing system was intuitive and flexible, it proved very popular because of its ease of use and was in operation for 9 years. When editing content, users could add sections, write text and upload pictures without reloading the page, something we take for granted nowadays but it's worth remembering that clunky user interfaces were the standard back then. The dynamic page editing was made possible thanks to use of AJAX style communication with the back-end using a hidden iframe (the iframe had to be used as AJAX was not cross-browser back in 2005).

-----

## ... just a few more noteworthy mentions ...

**Recalling a handful of the more unusual projects**

- A chart drawing tool for analysing the influences and progressions of democracies in developing countries - featured a full permissions system, an offline mode and a pdf export
- A back-end API for serving firmware updates for a £12,000 luxury Android phone
- A JavaScript animated flip-style count down for the Apple iTunes festival website. The previous year the site used a Flash based count down, this obviously had to be replaced after Apple declared war on Flash!
- The software to drive a set of TV screens showing motivating sales targets found in regional branches of a national office equipment supplier
- The world's first Sinclair ZX Spectrum emulator written in Flash
- A mini excel style web control for easy editing of large grid like datasets. Tens of thousands of rows were editable almost instantly thanks to an innovative system where the server encoded the data in optimised Flash bytecode (the .swf file), saving time with both download and client-side processing
- Various applications which powered live green-screen TV visuals such as news tickers and the graphics for phone-in games.  Used for many years on Babestation! 😳

&nbsp;