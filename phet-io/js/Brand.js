// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  // modules
  var brand = require( 'BRAND/../../js/brand' );

  // strings
  var licenseString = require( 'string!JOIST/license' );
  var translationCreditsLinkString = require( 'string!JOIST/translation.credits.link' );
  var thirdPartyCreditsLinkString = require( 'string!JOIST/thirdParty.credits.link' );

  // Documentation for all properties is available in brand/adapted-from-phet/js/Brand.js
  var Brand = {
    id: 'phet-io',
    name: 'PhET<sup>\u00ae</sup> Interactive Simulations', // no i18n
    copyright: 'Copyright © 2004-2015 University of Colorado Boulder',
    getLinks: function( simName, locale ) {
      return [
        {
          text: licenseString,
          url: 'http://phet.colorado.edu/en/licensing/html'
        },
        {
          text: translationCreditsLinkString,
          url: 'http://phet.colorado.edu/translation-credits?simName=' + encodeURIComponent( simName ) + '&locale=' + encodeURIComponent( locale )
        },
        {
          text: thirdPartyCreditsLinkString,
          url: 'http://phet.colorado.edu/third-party-credits?simName=' + encodeURIComponent( simName ) +
               '&locale=' + encodeURIComponent( locale ) + '#' + simName
        }
      ];
    }
  };

  brand.register( 'Brand', Brand );

  return Brand;
} );
