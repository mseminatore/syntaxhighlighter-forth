<?php
/*
Plugin Name: Add Forth Brush to SyntaxHighlighter Evolved
Description: Adds support for the Forth language to the SyntaxHighlighter Evolved plugin.
Author: Mark Seminatore
Version: 1.0.0
Author URI: https://fpgacoding.com
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_forth_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_forth_addlang' );
add_filter( 'syntaxhighlighter_brush_names', 'syntaxhighlighter_forth_addname' );

// Register the brush file with WordPress
function syntaxhighlighter_forth_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-forth', plugins_url( 'shBrushForth.js', __FILE__ ), array('syntaxhighlighter-core'), '1.0.0', true );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_forth_addlang( $brushes ) {
    $brushes['forth'] = 'forth';
    $brushes['f'] = 'forth';
 
    return $brushes;
}

// Filter SyntaxHighlighter Evolved's name array
function syntaxhighlighter_forth_addname( $names ) {
   $names['forth'] = 'Forth';

   return $names;
}
?>
