/**
 * @name Basic return values for API functions
 * @{
 */
var MWB_RT_OK = 0;
var MWB_RT_FAIL = -1;
var MWB_RT_NOT_SUPPORTED = -2;
var MWB_RT_BAD_PARAM = -3;

/** @brief  Code39 decoder flags value: require checksum check
 */
var MWB_CFG_CODE39_REQUIRE_CHECKSUM = 0x2;
/**/

 /** @brief  Code39 decoder flags value: don't require stop symbol - can lead to false results
 */
var MWB_CFG_CODE39_DONT_REQUIRE_STOP = 0x4;
/**/

 /** @brief  Code39 decoder flags value: decode full ASCII
 */
var MWB_CFG_CODE39_EXTENDED_MODE = 0x8;
/**/

 /** @brief  Code93 decoder flags value: decode full ASCII
 */
var MWB_CFG_CODE93_EXTENDED_MODE = 0x8;
/**/

 /** @brief  Code25 decoder flags value: require checksum check
 */
var MWB_CFG_CODE25_REQ_CHKSUM = 0x1;
/**/

 /** @brief  Code11 decoder flags value: require checksum check
 *  MWB_CFG_CODE11_REQ_SINGLE_CHKSUM is set by default
 */
var MWB_CFG_CODE11_REQ_SINGLE_CHKSUM = 0x1;
var MWB_CFG_CODE11_REQ_DOUBLE_CHKSUM = 0x2;
/**/

 /** @brief  MSI Plessey decoder flags value: require checksum check
 *  MWB_CFG_MSI_REQ_10_CHKSUM is set by default
 */
var MWB_CFG_MSI_REQ_10_CHKSUM = 0x01;
var MWB_CFG_MSI_REQ_1010_CHKSUM = 0x02;
var MWB_CFG_MSI_REQ_11_IBM_CHKSUM = 0x04;
var MWB_CFG_MSI_REQ_11_NCR_CHKSUM = 0x08;
var MWB_CFG_MSI_REQ_1110_IBM_CHKSUM = 0x10;
var MWB_CFG_MSI_REQ_1110_NCR_CHKSUM = 0x20;
/**/

 /** @brief  Codabar decoder flags value: include start/stop symbols in result
 */
var MWB_CFG_CODABAR_INCLUDE_STARTSTOP = 0x1;
/**/

/** @brief  Barcode decoder param types
 */
var MWB_PAR_ID_RESULT_PREFIX =       0x10;
var MWB_PAR_ID_ECI_MODE =            0x08;
/**/

/** @brief  Barcode param values
 */
    
 var  MWB_PAR_VALUE_ECI_DISABLED =    0x00; //default
 var  MWB_PAR_VALUE_ECI_ENABLED =     0x01;

 var  MWB_PAR_VALUE_RESULT_PREFIX_NEVER =   0x00; // default
 var  MWB_PAR_VALUE_RESULT_PREFIX_ALWAYS =  0x01;
 var  MWB_PAR_VALUE_RESULT_PREFIX_DEFAULT = 0x02;
/**/

 /** @brief  Global decoder flags value: calculate location for 1D barcodeTypes (Code128, Code93, Code39 supported)
  */
var MWB_CFG_GLOBAL_CALCULATE_1D_LOCATION   =  0x10;
    
/** @brief  Global decoder flags value: fail 1D decode if result is not confirmed by location expanding (Code128, Code93, Code39 supported)
  */
var MWB_CFG_GLOBAL_VERIFY_1D_LOCATION    =   0x20;
 /** @brief  Global decoder flags value: fail decode if result is not touching the center of viewfinder (2D + Code128, Code93, Code39 supported)
* 1D locaiton flags will be enabled automatically with this one
 */
var MWB_CFG_GLOBAL_USE_CENTRIC_SCANNING  =   0x40;

 /** @brief  Code39 decoder flags value: require checksum check
*/
 var MWB_CFG_CODE39_REQ_CHKSUM            =    0x2;
/**/


/** @brief  UPC/EAN decoder disable addons detection
 */
 var MWB_CFG_EANUPC_DISABLE_ADDON =  0x1;
/**/

 /** @brief  Global decoder flags value: apply sharpening on input image
 */
var MWB_CFG_GLOBAL_HORIZONTAL_SHARPENING = 0x01;
var MWB_CFG_GLOBAL_VERTICAL_SHARPENING = 0x02;
var MWB_CFG_GLOBAL_SHARPENING = 0x03;

/** @brief  Global decoder flags value: apply rotation on input image
 */
var MWB_CFG_GLOBAL_ROTATE90 = 0x04;

/**
 * @name Bit mask identifiers for supported decoder types
 * @{ */
var MWB_CODE_MASK_NONE = 0x00000000;
var MWB_CODE_MASK_QR = 0x00000001;
var MWB_CODE_MASK_DM = 0x00000002;
var MWB_CODE_MASK_RSS = 0x00000004;
var MWB_CODE_MASK_39 = 0x00000008;
var MWB_CODE_MASK_EANUPC = 0x00000010;
var MWB_CODE_MASK_128 = 0x00000020;
var MWB_CODE_MASK_PDF = 0x00000040;
var MWB_CODE_MASK_AZTEC = 0x00000080;
var MWB_CODE_MASK_25 = 0x00000100;
var MWB_CODE_MASK_93 = 0x00000200;
var MWB_CODE_MASK_CODABAR = 0x00000400;
var MWB_CODE_MASK_DOTCODE = 0x00000800;
var MWB_CODE_MASK_11 = 0x00001000;
var MWB_CODE_MASK_MSI = 0x00002000;
var MWB_CODE_MASK_MAXICODE = 0x00004000;
var MWB_CODE_MASK_POSTAL = 0x00008000;
var MWB_CODE_MASK_ALL = 0xffffffff;
/** @} */

/**
 * @name Basic return values for RegisterSDK function
 * @{
 */
var MWB_RTREG_OK                  =  0;
var MWB_RTREG_INVALID_KEY         = -1;
var MWB_RTREG_INVALID_CHECKSUM    = -2;
var MWB_RTREG_INVALID_APPLICATION = -3;
var MWB_RTREG_INVALID_SDK_VERSION = -4;
var MWB_RTREG_INVALID_KEY_VERSION = -5;
var MWB_RTREG_INVALID_PLATFORM    = -6;
var MWB_RTREG_KEY_EXPIRED         = -7;
/** @} */

/**
 * @name Bit mask identifiers for RSS decoder types
 * @{ */
var MWB_SUBC_MASK_RSS_14 = 0x00000001;
var MWB_SUBC_MASK_RSS_14_STACK = 0x00000002;
var MWB_SUBC_MASK_RSS_LIM = 0x00000004;
var MWB_SUBC_MASK_RSS_EXP = 0x00000008;
/** @} */

/**
* @name Bit mask identifiers for QR decoder types
* @{ */
var MWB_SUBC_MASK_QR_STANDARD = 0x00000001;
var MWB_SUBC_MASK_QR_MICRO = 0x00000002;
/** @} */


/**
 * @name Bit mask identifiers for Code 2 of 5 decoder types
 * @{ */
var MWB_SUBC_MASK_C25_INTERLEAVED 	= 0x00000001;
var MWB_SUBC_MASK_C25_STANDARD 		= 0x00000002;
var MWB_SUBC_MASK_C25_ITF14 		= 0x00000004;
var MWB_SUBC_MASK_C25_IATA 			= 0x00000008;
var MWB_SUBC_MASK_C25_MATRIX 		= 0x00000010;
var MWB_SUBC_MASK_C25_COOP 			= 0x00000020;
var MWB_SUBC_MASK_C25_INVERTED      = 0x00000040;

/** @} */

/**
 * @name Bit mask identifiers for UPC/EAN decoder types
 * @{ */
var MWB_SUBC_MASK_EANUPC_EAN_13 = 0x00000001;
var MWB_SUBC_MASK_EANUPC_EAN_8 = 0x00000002;
var MWB_SUBC_MASK_EANUPC_UPC_A = 0x00000004;
var MWB_SUBC_MASK_EANUPC_UPC_E = 0x00000008;
var MWB_SUBC_MASK_EANUPC_UPC_E1 = 0x00000010;
/** @} */

/**
 * @name Bit mask identifiers for POSTAL decoder types
 * @{ */
var MWB_SUBC_MASK_POSTAL_POSTNET   = 0x00000001;
var MWB_SUBC_MASK_POSTAL_PLANET    = 0x00000002;
var MWB_SUBC_MASK_POSTAL_IM        = 0x00000004;
var MWB_SUBC_MASK_POSTAL_ROYAL     = 0x00000008;
/** @} */

/**
 * @name Bit mask identifiers for 1D scanning direction
 * @{ */
var MWB_SCANDIRECTION_HORIZONTAL = 0x00000001;
var MWB_SCANDIRECTION_VERTICAL = 0x00000002;
var MWB_SCANDIRECTION_OMNI = 0x00000004;
var MWB_SCANDIRECTION_AUTODETECT = 0x00000008;
/** @} */

   /**
    * @name Bit mask identifiers for supported decoder types
    * @{ */
 var  MWP_PARSER_MASK_NONE =               0x00000000;
 var  MWP_PARSER_MASK_GS1  =               0x00000001;
 var  MWP_PARSER_MASK_IUID =               0x00000002;
 var  MWP_PARSER_MASK_ISBT =               0x00000004;
 var  MWP_PARSER_MASK_AAMVA=               0x00000008;
 var  MWP_PARSER_MASK_HIBC =               0x00000010;
 var  MWP_PARSER_MASK_SCM  =               0x00000020;
 var  MWP_PARSER_MASK_AUTO =               0x0fffffff;

/** @} */

var RECT_FULL_1D = {
	'left' : 5,
	'top' : 5,
	'width' : 90,
	'height' : 90
};
var RECT_FULL_2D = {
	'left' : 20,
	'top' : 5,
	'width' : 60,
	'height' : 90
};
var RECT_PORTRAIT_1D = {
	'left' : 20,
	'top' : 5,
	'width' : 60,
	'height' : 90
};
var RECT_PORTRAIT_2D = {
	'left' : 20,
	'top' : 5,
	'width' : 60,
	'height' : 90
};
var RECT_LANDSCAPE_1D = {
	'left' : 5,
	'top' : 20,
	'width' : 90,
	'height' : 60
};
var RECT_LANDSCAPE_2D = {
	'left' : 20,
	'top' : 5,
	'width' : 60,
	'height' : 90
};
var RECT_DOTCODE = {
	'left' : 30,
	'top' : 20,
	'width' : 40,
	'height' : 60
};

var scanner;

var BarcodeScanner = {

	MWBinitDecoder : function() {

		scanner = require('com.manateeworks.barcodescanner');

		var registerResult;

		if (Ti.Platform.osname === "android") {

			//Enter your Android licensing SDK key here
			registerResult = BarcodeScanner.MWBregisterSDK("ANDROID SDK_KEY");

		} else {
			//Enter your iOS licensing SDK key here
			registerResult = BarcodeScanner.MWBregisterSDK("IOS SDK_KEY");
		}

		switch(registerResult) {
		case MWB_RTREG_OK :
			console.log('Registration OK');
			break;
		case MWB_RTREG_INVALID_KEY :
			console.log('Registration Invalid Key');
			break;
		case MWB_RTREG_INVALID_CHECKSUM :
			console.log('Registration Invalid Checksum');
			break;
		case MWB_RTREG_INVALID_APPLICATION :
			console.log('Registration Invalid Application');
			break;
		case MWB_RTREG_INVALID_SDK_VERSION :
			console.log('Registration Invalid SDK Version');
			break;
		case MWB_RTREG_INVALID_KEY_VERSION :
			console.log('Registration Invalid Key Version');
			break;
		case MWB_RTREG_INVALID_PLATFORM :
			console.log('Registration Invalid Platform');
			break;
		case MWB_RTREG_KEY_EXPIRED :
			console.log('Registration Key Expired');
			break;
		default:
			console.log('Registration Unknown Error'+registerResult);
			break;
		}
		// Enable high resolution scanning if available on device
		BarcodeScanner.MWBuseHiRes(true);

		// choose code type or types you want to search for

		// Our sample app is configured by default to search both directions...
		BarcodeScanner.MWBsetDirection(MWB_SCANDIRECTION_HORIZONTAL | MWB_SCANDIRECTION_VERTICAL);
		// Our sample app is configured by default to search all supported barcodes...
		BarcodeScanner.MWBsetActiveCodes(MWB_CODE_MASK_25 | MWB_CODE_MASK_39 | MWB_CODE_MASK_128 | MWB_CODE_MASK_AZTEC | MWB_CODE_MASK_DM | MWB_CODE_MASK_EANUPC | MWB_CODE_MASK_PDF | MWB_CODE_MASK_QR | MWB_CODE_MASK_93 | MWB_CODE_MASK_CODABAR | MWB_CODE_MASK_11 | MWB_CODE_MASK_MSI | MWB_CODE_MASK_RSS | MWB_CODE_MASK_MAXICODE | MWB_CODE_MASK_POSTAL);

		// set the scanning rectangle based on scan direction(format in pct: x, y, width, height)
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_25, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_39, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_128, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_AZTEC, RECT_FULL_2D.left, RECT_FULL_2D.top, RECT_FULL_2D.width, RECT_FULL_2D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DM, RECT_FULL_2D.left, RECT_FULL_2D.top, RECT_FULL_2D.width, RECT_FULL_2D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_EANUPC, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_PDF, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_QR, RECT_FULL_2D.left, RECT_FULL_2D.top, RECT_FULL_2D.width, RECT_FULL_2D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_RSS, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_93, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_CODABAR, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DOTCODE, RECT_DOTCODE.left, RECT_DOTCODE.top, RECT_DOTCODE.width, RECT_DOTCODE.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_11, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MSI, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MAXICODE, RECT_FULL_2D.left, RECT_FULL_2D.top, RECT_FULL_2D.width, RECT_FULL_2D.height);
		BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_POSTAL, RECT_FULL_1D.left, RECT_FULL_1D.top, RECT_FULL_1D.width, RECT_FULL_1D.height);

		// But for better performance, only activate the symbologies your application requires...
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_25 );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_39 );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_128 );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_AZTEC );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_DM );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_EANUPC );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_PDF );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_QR );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_RSS );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_93 );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_CODABAR );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_DOTCODE );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_11 );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_MSI );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_MAXICODE );
		// BarcodeScanner.MWBsetActiveCodes( MWB_CODE_MASK_POSTAL );

		// For better performance, set like this for PORTRAIT scanning...
		// BarcodeScanner.MWBsetDirection(MWB_SCANDIRECTION_VERTICAL);
		// set the scanning rectangle based on scan direction(format in pct: x, y, width, height)
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_25,     RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_39,     RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_128,    RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_AZTEC,  RECT_PORTRAIT_2D.left, RECT_PORTRAIT_2D.top, RECT_PORTRAIT_2D.width, RECT_PORTRAIT_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DM,     RECT_PORTRAIT_2D.left, RECT_PORTRAIT_2D.top, RECT_PORTRAIT_2D.width, RECT_PORTRAIT_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_EANUPC, RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_PDF,    RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_QR,     RECT_PORTRAIT_2D.left, RECT_PORTRAIT_2D.top, RECT_PORTRAIT_2D.width, RECT_PORTRAIT_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_RSS,    RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_93,     RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_CODABAR,RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DOTCODE,RECT_DOTCODE.left, RECT_DOTCODE.top, RECT_DOTCODE.width, RECT_DOTCODE.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_11,     RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MSI,    RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MAXICODE, RECT_PORTRAIT_2D.left, RECT_PORTRAIT_2D.top, RECT_PORTRAIT_2D.width, RECT_PORTRAIT_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_POSTAL,    RECT_PORTRAIT_1D.left, RECT_PORTRAIT_1D.top, RECT_PORTRAIT_1D.width, RECT_PORTRAIT_1D.height);

		// or like this for LANDSCAPE scanning - Preferred for dense or wide codes...
		// BarcodeScanner.MWBsetDirection(MWB_SCANDIRECTION_HORIZONTAL);
		// set the scanning rectangle based on scan direction(format in pct: x, y, width, height)
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_25,     RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_39,     RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_128,    RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_AZTEC,  RECT_LANDSCAPE_2D.left, RECT_LANDSCAPE_2D.top, RECT_LANDSCAPE_2D.width, RECT_LANDSCAPE_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DM,     RECT_LANDSCAPE_2D.left, RECT_LANDSCAPE_2D.top, RECT_LANDSCAPE_2D.width, RECT_LANDSCAPE_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_EANUPC, RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_PDF,    RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_QR,     RECT_LANDSCAPE_2D.left, RECT_LANDSCAPE_2D.top, RECT_LANDSCAPE_2D.width, RECT_LANDSCAPE_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_RSS,    RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_93,     RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_CODABAR,RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_DOTCODE,RECT_DOTCODE.left, RECT_DOTCODE.top, RECT_DOTCODE.width, RECT_DOTCODE.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_11,     RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MSI,    RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_MAXICODE,RECT_LANDSCAPE_2D.left, RECT_LANDSCAPE_2D.top, RECT_LANDSCAPE_2D.width, RECT_LANDSCAPE_2D.height);
		//BarcodeScanner.MWBsetScanningRect(MWB_CODE_MASK_POSTAL,    RECT_LANDSCAPE_1D.left, RECT_LANDSCAPE_1D.top, RECT_LANDSCAPE_1D.width, RECT_LANDSCAPE_1D.height);

		// set decoder effort level (1 - 5)
		// for live scanning scenarios, a setting between 1 to 3 will suffice
		// levels 4 and 5 are typically reserved for batch scanning
		BarcodeScanner.MWBsetLevel(2);


		/**
		*  Set active parser type
		*
		*  activeParser  Available options:
		*              MWP_PARSER_MASK_NONE
		*              MWP_PARSER_MASK_AUTO
		*              MWP_PARSER_MASK_GS1
		*              MWP_PARSER_MASK_IUID
		*              MWP_PARSER_MASK_ISBT
		*              MWP_PARSER_MASK_AAMVA
		*              MWP_PARSER_MASK_HIBC
		*              MWP_PARSER_MASK_SCM
		*/
		BarcodeScanner.MWPsetActiveParser(MWP_PARSER_MASK_NONE);

		
		// BarcodeScanner.MWBsetMaxThreads(1);
		// BarcodeScanner.MWBenableZoom(true);
		// BarcodeScanner.MWBsetZoomLevels(200,400,0);
		//enable extended mode for code 39 and 93
		BarcodeScanner.MWBsetFlags(MWB_CODE_MASK_39, MWB_CFG_CODE39_EXTENDED_MODE);
		BarcodeScanner.MWBsetFlags(MWB_CODE_MASK_93, MWB_CFG_CODE93_EXTENDED_MODE);

	},

	MWBregisterSDK : function(key) {
		return scanner.MWBregisterSDK(key);
	},

	MWBsetActiveCodes : function(activeCodes) {
		scanner.MWBsetActiveCodes(activeCodes);
	},

	MWBsetActiveSubcodes : function(codeMask, activeSubcodes) {
		scanner.MWBsetActiveCodes(activeCodes, activeSubcodes);
	},

	MWBsetFlags : function(codeMask, flags) {
		scanner.MWBsetFlags(codeMask, flags);
	},

	MWBsetDirection : function(direction) {
		scanner.MWBsetDirection(direction);
	},

	MWBsetScanningRect : function(codeMask, left, top, width, height) {
		scanner.MWBsetScanningRect(codeMask, left, top, width, height);
	},

	MWBsetLevel : function(level) {
		scanner.MWBsetLevel(level);

	},

	MWBsetLevel2 : function(level) {
		scanner.MWBsetLevel2(level);

	},

	MWBuseHiRes : function(hiRes) {
		scanner.MWBuseHiRes(hiRes);
	},

	MWBsetButtonsVisible : function(flashVisible, closeVisible) {
		scanner.MWBsetButtonsVisible(flashVisible, closeVisible);
	},

	MWBuseBlinkingLineOverlay : function(blinkingLine) {
		scanner.MWBuseBlinkingLineOverlay(blinkingLine);
	},

	MWBsetCloseCameraOnDetection : function(closeOnDetection) {
		scanner.MWBsetCloseCameraOnDetection(closeOnDetection);
	},

	MWBresumeScanning : function() {
		scanner.MWBresumeScanning();
	},

	MWBcloseScanner : function() {
		scanner.MWBcloseScanner();
	},
	MWBsetMaxThreads : function(numThreads) {
		scanner.MWBsetMaxThreads(numThreads);
	},
	MWBenableZoom : function(enableZoom) {
		scanner.MWBenableZoom(enableZoom);
	},
	MWBsetZoomLevels : function(zoomLevel1, zoomLevel2, initialZoomLevel) {
		scanner.MWBsetZoomLevels(zoomLevel1, zoomLevel2, initialZoomLevel);
	},
	MWPsetActiveParser: function(activeParser) {
		scanner.MWPsetActiveParser(activeParser);
	}
};

var startScanning = function() {

	//configure decoder options
	//adjust user interface
	BarcodeScanner.MWBinitDecoder();
	var closeCameraOnDetection = true;
	BarcodeScanner.MWBsetCloseCameraOnDetection(closeCameraOnDetection);
	BarcodeScanner.MWBuseBlinkingLineOverlay(true);
	BarcodeScanner.MWBsetButtonsVisible(true, true);

	if (Ti.Platform.osname != 'android') {
		//Titanium.UI.iPhone.hideStatusBar();
	}

	//run scanner
	scanner.startScanning({

		success : function(result) {
			if (Ti.Platform.osname != 'android') {
				//Titanium.UI.iPhone.showStatusBar();
			}

			if (result && result.code) {

				// result.code - string representation of barcode result
				// result.type - type of barcode detected
				// result.bytes - bytes array of raw barcode result

				// BarcodeScanner.MWBcloseScanner();
				if (closeCameraOnDetection) {
					var alert = Titanium.UI.createAlertDialog({
						title : result.type + (result.isGS1 ? " (GS1)" : ""),
						message : result.code,
						buttonNames : ['OK', 'Cancel'],
						cancel : 1
					});

					alert.addEventListener('click', function(e) {

					});
					alert.show();

				} else {
					console.log("result: " + result.code);
					setTimeout(function() {
						BarcodeScanner.MWBresumeScanning();
					}, 2000);
				}

			}
		},

		error : function(err) {
			if (Ti.Platform.osname != 'android') {
				//Titanium.UI.iPhone.showStatusBar();
			}
			alert("Error!! " + err.message);
		},

		cancel : function() {
			if (Ti.Platform.osname != 'android') {
				//Titanium.UI.iPhone.showStatusBar();
			}
		}
	});

};
