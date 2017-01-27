package com.manateeworks;

public class MWParser {

	  static {
	        System.loadLibrary("BarcodeScannerLib");
		  }
	  
	  
	  /**
	   * @name Basic return values for API functions
	   * @{
	   */
	  public static final int  MWB_RT_OK =                  	  0;
	  public static final int  MWB_RT_FAIL =                	 -1;
	  public static final int  MWB_RT_NOT_SUPPORTED =       	 -2;
	  public static final int  MWB_RT_BAD_PARAM =            	 -3;
	  

	  /**
	   * @name Bit mask identifiers for supported decoder types
	   * @{ */
	  public static final int MWP_PARSER_MASK_NONE =       0x00000000;
	  public static final int MWP_PARSER_MASK_GS1 =        0x00000001;
	  public static final int MWP_PARSER_MASK_IUID =       0x00000002;
	  public static final int MWP_PARSER_MASK_ISBT =       0x00000004;
	  public static final int MWP_PARSER_MASK_AAMVA =      0x00000008;
	  public static final int MWP_PARSER_MASK_HIBC =       0x00000010;
	  public static final int MWP_PARSER_MASK_UPS =        0x00000020;
	  /** @} */
	  
	  
	//UID PARSER ERROR CODES
	  public static final double UID_ERROR_INVALID_HEADER =   -1;
	  public static final double UID_ERROR_INVALID_FORMAT =   -2;
	  public static final double UID_ERROR_INVALID_EI =       -3.0;
	  public static final double UID_ERROR_INVALID_CAGE =     -3.1;
	  public static final double UID_ERROR_INVALID_DUNS =     -3.2;
	  public static final double UID_ERROR_INVALID_DODAAC =   -3.3;
	  public static final double UID_ERROR_INVALID_GS1COMP =  -3.4;
	  public static final double UID_ERROR_INVALID_PN =       -4;
	  public static final double UID_ERROR_INVALID_SN =       -5;
	  public static final double UID_ERROR_INVALID_UII =      -6;
	  public static final double UID_ERROR_INVALID_LOT =      -7;
	  public static final double UID_ERROR_GS_MISSING =       -8;     //GS Missing after Header
	  public static final double UID_ERROR_RS_MISSING =       -9;
	  public static final double UID_ERROR_EOT_MISSING =      -10;
	  public static final double UID_ERROR_NO_SN =            -11;
	  public static final double UID_ERROR_NO_EI =            -12;
	  public static final double UID_ERROR_NO_PN =            -13;
	  public static final double UID_ERROR_NO_LOT =           -14;
	  public static final double UID_ERROR_DUPLICATE_DQ =     -15;
	  public static final double UID_ERROR_DUPLICATE_UII =    -16;
	  public static final double UID_ERROR_DUPLICATE_LOT =    -17;
	  public static final double UID_ERROR_DUPLICATE_SN =     -18;
	  public static final double UID_ERROR_DUPLICATE_EI =     -19;
	  public static final double UID_ERROR_LOT_PN_CONFLICT =  -20;
	  public static final double UID_ERROR_MISSING_REQ =      -21;
	  public static final double UID_ERROR_INVALID_IAC =      -22;
	  public static final double UID_ERROR_INVALID_TEI =      -23;

	  //UID PARSER WARNING CODES
	  public static final double UID_WARN_EXTRA_CHARS =       91;      //characters after EOT
	  public static final double UID_WARN_UNNEEDED_DATA =     92;      //unneeded additional data
	  public static final double UID_WARN_SPACE_AROUND =      93;      //space at the beginning or end of the uid
	  public static final double UID_WARN_UNKNOWN_DQ =        94;
	  public static final double UID_WARN_OBSOLETE_FORMAT =   95;      //warning for DD
	  
	  //UPS PARSER ERROR CODES
	  public static final double UPS_ERROR_INVALID_FORMAT = 		-1;
	  public static final double UPS_ERROR_INVALID_CODE = 			-2;
	  public static final double UPS_ERROR_ELEMENT_NOT_FOUND = 		-3;
	  public static final double UPS_ERROR_CANT_ALLOCATE_MEMORY = 	-4;

	  //UPS PARSER WARNING CODES
	  public static final double UPS_WARNING_LENGTH_OUT_OF_BOUNDS = 	1;		//possible compression used by UPS
	  public static final double UPS_WARNING_FIELD_EXCEEDS_MAX_LENGTH = 2;		//possible compression used by UPS
	  public static final double UPS_WARNING_INVALID_TERMINATOR = 		3;		//possible compression used by UPS
	  
	  
	  /**
	   * Returns version code of Parser Library.
	   *
	   * @return  32-bit version code in x.y.z format.
	   * @n       Byte 3 (most significant byte):     reserved (0)
	   * @n       Byte 2:                             value x
	   * @n       Byte 1:                             value y
	   * @n       Byte 0 (least significant byte):    value z
	   */
	  public native static int MWBgetLibVersion ();
	  
	  
	  /**
	   * Returns supported parsers in this library release.
	   *
	   * @returns 32-bit bit mask where each non-zero bit represents
	   *          supported decoder according to MWP_PARSER_MASK_... values
	   *          defined in MWParser.h header file.
	   */
	  public native static int MWPgetSupportedParsers();
	  
	  
	  public native static int MWPregisterParser(int parserMask, String userName, String key);
	  
	  public native static String MWPgetFormattedText(int parser_type, byte[] input);
	  
	  public native static String MWPgetJSON(int parser_type, byte[] input);
	  
	  
	  
	  
	  
	  
	  
	  

}