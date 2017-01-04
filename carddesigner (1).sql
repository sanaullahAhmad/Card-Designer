-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2017 at 08:00 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carddesigner`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminuploads`
--

CREATE TABLE `adminuploads` (
  `id` int(11) NOT NULL,
  `imgpath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminuploads`
--

INSERT INTO `adminuploads` (`id`, `imgpath`) VALUES
(1, 'admin/uploads/bohochicinvite-1.jpg'),
(3, 'admin/uploads/floralcc.jpg'),
(5, 'admin/uploads/clean_cursive_invite.jpg'),
(8, 'admin/uploads/Hydrangeas.jpg'),
(9, 'admin/uploads/Garden picture.jpg'),
(10, 'admin/uploads/06f99c1fa0e591398b49fa8db30d44c0.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `adminuser`
--

CREATE TABLE `adminuser` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminuser`
--

INSERT INTO `adminuser` (`id`, `email`, `password`) VALUES
(1, 'admin@test.com', 'adminpass'),
(2, 'test@test.com', 'testpass');

-- --------------------------------------------------------

--
-- Table structure for table `background`
--

CREATE TABLE `background` (
  `id` int(11) NOT NULL,
  `bgcat_id` int(11) NOT NULL,
  `bg_name` varchar(255) NOT NULL,
  `bg_path` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `background`
--

INSERT INTO `background` (`id`, `bgcat_id`, `bg_name`, `bg_path`) VALUES
(4, 1, 'Gray Washed Wall', 'uploads/grey_wash_wall.png'),
(16, 8, 'Sand', 'uploads/sand.jpg'),
(17, 8, 'Eggshell', 'uploads/eggshell.jpg'),
(10, 4, 'Barnwood', 'uploads/barnwood.jpg'),
(15, 7, 'Dark Grunge', 'uploads/dark-grunge.jpg'),
(18, 8, 'Limestone', 'uploads/limestone.jpg'),
(19, 8, 'Deep Sea', 'uploads/deep sea.jpg'),
(20, 8, 'Fern', 'uploads/fern.jpg'),
(21, 8, 'Stormy Sky', 'uploads/stormy sky.jpg'),
(22, 8, 'Fawn', 'uploads/fawn.jpg'),
(23, 8, 'Bark', 'uploads/bark.jpg'),
(24, 8, 'Mushroom', 'uploads/mushroom.jpg'),
(25, 7, 'Chalkboard Dark', 'uploads/Chalkboard-dark.jpg'),
(26, 7, 'Chalkboard light', 'uploads/Chalkboard-light.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bgimage`
--

CREATE TABLE `bgimage` (
  `id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `image_json` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bgimage`
--

INSERT INTO `bgimage` (`id`, `image_name`, `image_path`, `image_json`) VALUES
(1, 'test', 'uploads/Penguins.jpeg', ''),
(2, 'tested123', 'uploads/Tulips.jpeg', ''),
(3, 'test1', 'uploads/Koala.jpeg', '');

-- --------------------------------------------------------

--
-- Table structure for table `bg_categories`
--

CREATE TABLE `bg_categories` (
  `bgcat_id` int(11) NOT NULL,
  `bgcat_name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bg_categories`
--

INSERT INTO `bg_categories` (`bgcat_id`, `bgcat_name`) VALUES
(4, 'Wood'),
(10, 'Scenery'),
(7, 'Grunge'),
(8, 'Paper');

-- --------------------------------------------------------

--
-- Table structure for table `element`
--

CREATE TABLE `element` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `element_name` varchar(255) NOT NULL,
  `element_path` varchar(255) NOT NULL,
  `element_json` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `element`
--

INSERT INTO `element` (`id`, `cat_id`, `element_name`, `element_path`, `element_json`) VALUES
(154, 21, 'Facebook Icon', 'uploads/facebook-icon.svg', ''),
(155, 21, 'Email Icon', 'uploads/close-envelope.svg', ''),
(114, 17, 'Curly Design 1', 'uploads/curly-design.svg', ''),
(115, 18, 'Simple Banner', 'uploads/simple-banner.svg', ''),
(116, 18, 'Simple Banner 2', 'uploads/simple-banner-2.svg', ''),
(117, 18, 'Simple Banner 3', 'uploads/simple-banner-3.svg', ''),
(120, 17, 'Curly Design 2', 'uploads/curly-design2.svg', ''),
(121, 17, 'Curly Design 3', 'uploads/curly-design3.svg', ''),
(159, 21, 'Phone 1', 'uploads/call-answer.svg', ''),
(161, 23, 'Curved Arrow', 'uploads/arrows.svg', ''),
(162, 21, 'LinkedIn', 'uploads/linkedin-logo.svg', ''),
(163, 23, 'Cursor Arrow', 'uploads/arrow.svg', ''),
(164, 23, 'Arrow', 'uploads/arrows-1.svg', ''),
(165, 21, 'Cell Phone', 'uploads/cell-phone.svg', ''),
(166, 22, 'Sunburst', 'uploads/interface.svg', ''),
(167, 21, 'Phone Outline', 'uploads/telephone.svg', ''),
(168, 21, 'Skype', 'uploads/application.svg', ''),
(169, 22, 'Rounded Sunburst', 'uploads/shapes.svg', ''),
(170, 21, 'Twitter', 'uploads/twitter-logo.svg', ''),
(171, 18, 'Angled Ribbon', 'uploads/ribbon-black-shape.svg', ''),
(172, 18, 'Down Banner', 'uploads/bookmark-tag.svg', ''),
(173, 25, 'Hand Pointing', 'uploads/hand.svg', ''),
(174, 23, 'Arrow 2', 'uploads/play.svg', ''),
(175, 22, 'Star', 'uploads/star.svg', ''),
(176, 22, 'Star Outline', 'uploads/star-1.svg', ''),
(177, 21, 'WWW', 'uploads/world-wide-web.svg', ''),
(178, 25, 'Asterisk', 'uploads/asterisk.svg', ''),
(179, 25, 'Dotted Separator', 'uploads/dotted-barline.svg', ''),
(180, 25, 'Straight Line', 'uploads/horizontal-line.svg', ''),
(182, 25, 'Square outline', 'uploads/square-outlined-shape.svg', ''),
(183, 23, 'Zig Zag', 'uploads/zigzag-arrow.svg', ''),
(187, 17, 'Modern Divider', 'uploads/divider-37709_960_720.svg', ''),
(192, 25, 'Check Mark 1', 'uploads/checked-mark1.svg', ''),
(189, 18, 'Corner Ribbon 1', 'uploads/Corner_mourning_ribbon.svg', ''),
(193, 25, 'Check Mark 2', 'uploads/check-mark2.svg', ''),
(195, 0, 'blurredwedding', 'uploads/blurredwedding.jpg', ''),
(196, 0, 'kpomservices', 'uploads/kpomservices.jpg', ''),
(197, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(198, 0, 'beach', 'uploads/beach.jpg', ''),
(199, 0, 'Jellyfish', 'uploads/Jellyfish.jpeg', ''),
(200, 0, 'Tulips', 'uploads/Tulips.jpeg', ''),
(201, 0, 'floralcc', 'uploads/floralcc.jpg', ''),
(202, 0, 'clean_cursive_invite', 'uploads/clean_cursive_invite.jpg', ''),
(203, 0, 'bohochicinvite-1', 'uploads/bohochicinvite-1.jpg', ''),
(204, 0, 'cards_gifts_frame', 'uploads/cards_gifts_frame.jpg', ''),
(205, 0, 'clean_cursive_invite', 'uploads/clean_cursive_invite.jpg', ''),
(206, 0, 'free-wedding-program-with-bridal-party-silhouettes', 'uploads/free-wedding-program-with-bridal-party-silhouettes.jpg', ''),
(207, 0, 'Tulips', 'uploads/Tulips.jpeg', ''),
(208, 0, 'Tulips', 'uploads/Tulips.jpeg', ''),
(209, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(210, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(211, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(212, 0, 'Tulips', 'uploads/Tulips.jpeg', ''),
(213, 0, 'Tulips', 'uploads/Tulips.jpeg', ''),
(214, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(215, 0, 'Lighthouse', 'uploads/Lighthouse.jpeg', ''),
(216, 0, 'Lighthouse', 'uploads/Lighthouse.jpeg', ''),
(217, 0, 'Penguins', 'uploads/Penguins.jpeg', ''),
(218, 0, 'Tulips', 'uploads/Tulips.jpeg', '');

-- --------------------------------------------------------

--
-- Table structure for table `element_categories`
--

CREATE TABLE `element_categories` (
  `category_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `element_categories`
--

INSERT INTO `element_categories` (`category_id`, `category`) VALUES
(23, 'Arrows'),
(21, 'Icons'),
(22, 'Badges'),
(17, 'Curly Designs'),
(18, 'Banners'),
(25, 'Miscellaneous'),
(20, 'Hearts'),
(26, 'Stock Photos');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `template`
--

CREATE TABLE `template` (
  `template_id` int(100) NOT NULL,
  `template_name` varchar(255) NOT NULL,
  `canvas_thumbnail` longtext NOT NULL,
  `canvas_json` longtext NOT NULL,
  `cat_id` int(100) NOT NULL,
  `created_date` date NOT NULL,
  `modified_date` date NOT NULL,
  `product_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `template`
--

INSERT INTO `template` (`template_id`, `template_name`, `canvas_thumbnail`, `canvas_json`, `cat_id`, `created_date`, `modified_date`, `product_id`) VALUES
(407, 'HEART INVITE', 'admin/templates/407.png', 'admin/templates/407.ype', 11, '0000-00-00', '0000-00-00', 226),
(411, 'GIFT CARDS', 'admin/templates/411.png', 'admin/templates/411.ype', 11, '0000-00-00', '0000-00-00', 229),
(412, 'VINTAGE INVITE', 'admin/templates/412.png', 'admin/templates/412.ype', 11, '0000-00-00', '0000-00-00', 230),
(413, 'ssdds2', 'admin/templates/413.png', 'admin/templates/413.ype', 0, '0000-00-00', '0000-00-00', 289),
(426, 'test', 'admin/templates/426.png', 'admin/templates/426.ype', 10, '0000-00-00', '0000-00-00', 294),
(429, 'sea', 'admin/templates/429.png', 'admin/templates/429.ype', 11, '0000-00-00', '0000-00-00', 296),
(430, 'temp', 'admin/templates/430.png', 'admin/templates/430.ype', 12, '0000-00-00', '0000-00-00', 298),
(431, 'test2', 'admin/templates/431.png', 'admin/templates/431.ype', 10, '0000-00-00', '0000-00-00', 0),
(432, 'saasdas', 'admin/templates/431.png', 'admin/templates/431.ype', 10, '0000-00-00', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `template_categories`
--

CREATE TABLE `template_categories` (
  `tempcat_id` int(11) NOT NULL,
  `tempcat_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `template_categories`
--

INSERT INTO `template_categories` (`tempcat_id`, `tempcat_name`) VALUES
(9, 'Postcards & Mailers'),
(10, 'Thank you notes'),
(11, 'Social Posts'),
(12, 'Expired Listing Letters'),
(13, 'testflyer catergory');

-- --------------------------------------------------------

--
-- Table structure for table `template_test`
--

CREATE TABLE `template_test` (
  `template_id` int(100) NOT NULL,
  `template_name` varchar(255) NOT NULL,
  `canvas_thumbnail` longtext NOT NULL,
  `canvas_json` longtext NOT NULL,
  `cat_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `template_test`
--

INSERT INTO `template_test` (`template_id`, `template_name`, `canvas_thumbnail`, `canvas_json`, `cat_id`) VALUES
(180, 'Calligraphy with food options', 'data:image/png;base64,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', '["{\\"width\\": 336, \\"height\\": 192, \\"rows\\": 4, \\"cols\\": 2}",{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":182.4,"top":-41.95,"width":48,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"206, 19","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":88.68,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20},{"type":"path-group","originX":"left","originY":"top","left":139.25,"top":108.71,"width":381.5,"height":381.5,"fill":"","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.15,"scaleY":0.15,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":"newsvgs/69295.svg","clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":103.49,"width":381.5,"height":174.51,"fill":"#000000","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"path":[["M",353.165,182.381],["c",1.217,-2.613,9.533,-13.636,17.062,-25.062],["c",0.007,-0.008,0.013,-0.016,0.017,-0.023],["c",1.699,-2.578,3.355,-5.175,4.885,-7.702],["c",0.043,-0.071,0.086,-0.143,0.129,-0.214],["c",0.248,-0.412,17.859,-28.646,-7.225,-17.212],["c",0,0.002,-0.002,0.005,-0.004,0.007],["c",-4.713,2.417,-10.707,6.021,-18.244,11.072],["c",-16.441,11.021,-49.885,27.154,-49.885,27.154],["s",-5.82,3.144,-9.658,0.749],["c",-19.396,-12.1,-47.656,-33.594,-84.912,-45.562],["c",-0.621,-0.2,-1.408,-0.673,-0.338,-1.664],["l",15.955,-11.158],["c",0,0,1.25,-1.08,-0.355,-1.602],["c",-7.896,-2.573,-40.783,-13.601,-69.24,-3.462],["c",-5.797,2.065,-10.555,3.761,-14.467,5.155],["c",-1.682,0.6,-3.391,1.305,-6.799,1.726],["C",52.482,117.237,0,174.203,0,196.737],["c",0,15.123,8.154,25.271,37.947,39.378],["c",0.598,-0.095,5.146,3.17,15.137,0.168],["c",2.678,-0.805,21.697,-7.968,22.453,-8.291],["c",0.758,-0.346,1.25,-0.517,1.564,-0.466],["c",0.404,0.064,0.701,0.962,0.699,1.144],["c",-0.063,5.387,-10.16,9.75,-15.893,14.537],["c",-0.984,0.459,-1.248,2.744,0.475,3.484],["c",0.002,0,20.246,10.854,52.307,14.229],["c",2.592,0.273,36.34,21.897,70.371,16.096],["c",17.999,-3.069,26.564,-4.119,30.473,-5.197],["c",3.412,-0.94,1.783,-2.022,1.783,-2.022],["l",-17.059,-13.592],["c",-1.155,-1.281,-0.221,-2.265,0.746,-2.539],["c",37.882,-10.779,67.834,-27.771,85.672,-42.328],["c",2.402,-1.961,8.645,2.701,13.102,4.953],["c",14.801,7.477,76.238,32.803,81.301,27.442],["c",0.436,-0.452,0.467,-1.125,0.023,-2.05],["C",372.456,223.524,341.21,208.035,353.165,182.381],["z"],["M",62.835,180.632],["c",-5.465,0,-9.895,-4.512,-9.895,-10.077],["s",4.43,-10.076,9.895,-10.076],["s",9.896,4.511,9.896,10.076],["S",68.3,180.632,62.835,180.632],["z"],["M",107.118,237.965],["c",-0.609,0.547,-1.164,1.373,-0.842,0.185],["c",0,0,15.426,-23.21,17.426,-53.211],["c",1.498,-22.484,-13.482,-50.02,-13.482,-50.02],["s",0.029,-0.804,0.555,-0.169],["C",116.108,141.2,168.618,182.688,107.118,237.965],["z"]],"pathOffset":{"x":190.74784626392915,"y":190.74781136870962}}]},{"type":"textbox","originX":"center","originY":"top","left":168,"top":27.42,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":false,"lockScalingY":true,"text":"Samantha Green","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{"lineHeight":1.2},"1":{"lineHeight":1.2},"2":{"lineHeight":1.2},"3":{"lineHeight":1.2},"4":{"lineHeight":1.2},"5":{"lineHeight":1.2},"6":{"lineHeight":1.2},"7":{"lineHeight":1.2},"8":{"lineHeight":1.2},"9":{},"10":{},"11":{},"12":{},"13":{"fontFamily":"Great Vibes","fontSize":47,"fontWeight":"normal","fontStyle":""},"14":{}}},"minWidth":20}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":140.58,"top":58.51,"width":56,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"148, 119","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":27.42,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":false,"lockScalingY":true,"text":"Kathy Green","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{"lineHeight":1.2},"5":{"lineHeight":1.2},"6":{},"7":{},"8":{},"9":{},"10":{"fontFamily":"Great Vibes","fontSize":47,"fontWeight":"normal","fontStyle":""},"11":{}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":88.68,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20},{"type":"path-group","originX":"left","originY":"top","left":147.53,"top":119.49,"width":25.29,"height":25.29,"fill":"","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.56,"scaleY":1.56,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":"newsvgs/69984.svg","clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":0.39,"width":25.29,"height":24.51,"fill":"#030104","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"path":[["M",25.287,5.168],["c",0.053,-0.948,-1.138,-1.348,-1.396,-1.989],["c",0.177,-0.183,0.373,-1.325,0.323,-1.683],["c",-0.049,-0.346,-0.829,0.445,-0.967,0.287],["c",-0.157,-0.183,0.109,-0.971,-0.18,-1.377],["c",-0.147,-0.207,-0.483,1.327,-0.737,1.442],["c",-0.183,0.082,-0.502,-0.351,-0.828,-0.95],["c",-0.533,-0.979,-0.239,1.129,-0.188,1.531],["c",-1.413,0.216,-2.298,1.153,-2.696,2.369],["c",-0.438,1.337,-1.661,4.313,-3.911,4.454],["c",-2.703,0.17,-5.718,-2.358,-7.14,-3.814],["C",6.81,4.665,6.257,2.439,4.931,2.611],["C",4.332,2.689,3.861,3.535,3.16,3.717],["c",0,0,-3.6,0.889,-3.115,1.856],["c",0.286,0.569,1.859,1.316,3.06,1.82],["C",3.158,7.414,3.187,7.474,3.17,7.528],["c",-0.017,0.056,-0.072,0.089,-0.128,0.08],["c",-1.03,-0.183,-2.054,-0.222,-1.03,0.657],["C",2.265,8.482,3.214,8.94,4.104,9.347],["c",0.053,0.023,0.08,0.084,0.06,0.139],["C",4.145,9.541,4.088,9.573,4.031,9.559],["C",3.31,9.384,2.655,9.308,2.695,9.623],["c",0.089,0.71,2.828,2.794,2.828,2.794],["c",-0.347,0.426,1.065,1.955,1.29,2.147],["c",-0.324,-0.108,-0.673,0.016,-0.214,0.431],["c",0.676,0.614,0.826,1.604,1.404,2.178],["c",1.699,1.689,4.248,0.415,5.561,3.267],["c",0.068,0.148,0.367,0.747,0.624,1.27],["c",0.077,0.156,0.077,0.339,0.001,0.495],["c",-0.077,0.156,-0.222,0.269,-0.392,0.304],["l",-1.699,0.352],["c",-0.247,0.051,-0.421,0.28,-0.397,0.537],["c",0.026,0.274,0.27,0.478,0.545,0.451],["l",1.68,-0.157],["c",0.056,-0.005,0.11,0.024,0.137,0.074],["s",0.02,0.111,-0.017,0.155],["l",-0.134,0.161],["c",-0.176,0.212,-0.147,0.527,0.065,0.704],["c",0.093,0.077,0.206,0.115,0.319,0.115],["c",0.144,0,0.285,-0.062,0.385,-0.181],["l",0.707,-0.851],["c",0.134,-0.161,0.346,-0.234,0.551,-0.19],["l",2.476,0.532],["c",0.246,0.053,0.498,-0.087,0.58,-0.331],["c",0.088,-0.262,-0.054,-0.546,-0.316,-0.634],["l",-2.234,-0.747],["c",-0.203,-0.067,-0.351,-0.246,-0.379,-0.458],["c",-0.054,-0.398,-0.124,-0.9,-0.173,-1.284],["c",-0.033,-0.258,0.125,-0.502,0.373,-0.577],["c",1.134,-0.34,1.741,-1.725,2.477,-2.658],["c",0.337,-0.43,0.813,-0.722,1.348,-0.831],["c",2.928,-0.597,3.921,-3.638,4.229,-6.854],["c",0.182,-1.898,-0.71,-2.667,-1.182,-4.08],["C",23.731,5.579,24.381,4.692,25.287,5.168],["z"],["M",22.065,4.111],["c",-0.218,0,-0.393,-0.176,-0.393,-0.394],["c",0,-0.22,0.176,-0.396,0.393,-0.396],["c",0.223,0,0.394,0.176,0.394,0.396],["C",22.459,3.935,22.287,4.111,22.065,4.111],["z"]],"pathOffset":{"x":12.644384268900694,"y":12.643908461702816}}]}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"text","originX":"left","originY":"top","left":140,"top":53.78,"width":56,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"144, 115","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":27.42,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":false,"lockScalingY":true,"text":"Jessica Warren","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{"fontFamily":"Great Vibes","fontSize":47,"fontWeight":"normal","fontStyle":""},"14":{"lineHeight":1.2}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":88.68,"width":150,"height":24.41,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.2,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20},{"type":"path-group","originX":"left","originY":"top","left":144.04,"top":114.75,"width":475.69,"height":475.7,"fill":"","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.1,"scaleY":0.1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":"newsvgs/10934.svg","clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"paths":[{"type":"polygon","originX":"left","originY":"top","left":0,"top":76.1,"width":475.69,"height":323.5,"fill":"#000000","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"points":[{"x":473.006,"y":155.496},{"x":421.754,"y":102.028},{"x":444.061,"y":87.801},{"x":445.363,"y":76.713},{"x":435.016,"y":76.096},{"x":408.182,"y":95.397},{"x":374.697,"y":95.426},{"x":354.199,"y":82.91},{"x":346.857,"y":84.409},{"x":346.965,"y":92.546},{"x":360.178,"y":107.18},{"x":358.436,"y":114.867},{"x":202.938,"y":131.59},{"x":41.869,"y":127.092},{"x":24.512,"y":134.368},{"x":11.727,"y":150.614},{"x":5.149,"y":188.614},{"x":3.987,"y":215.93},{"x":0,"y":241.437},{"x":1.096,"y":266.842},{"x":5.58,"y":267.759},{"x":12.098,"y":260.583},{"x":17.397,"y":236.746},{"x":13.102,"y":203.678},{"x":14.596,"y":203.453},{"x":24.692,"y":253.795},{"x":17.815,"y":297.485},{"x":24.094,"y":384.681},{"x":24.692,"y":394.337},{"x":30.811,"y":399.557},{"x":57.866,"y":399.599},{"x":66.584,"y":396.962},{"x":42.379,"y":357.545},{"x":54.387,"y":307.489},{"x":60.676,"y":307.5},{"x":82.619,"y":374.053},{"x":93.93,"y":391.139},{"x":99.51,"y":394.574},{"x":129.375,"y":394.596},{"x":133.207,"y":389.801},{"x":107.354,"y":373.92},{"x":89.825,"y":319.936},{"x":94.219,"y":311.172},{"x":104.516,"y":312.128},{"x":110.981,"y":327.958},{"x":120.346,"y":312.528},{"x":129.42,"y":328.024},{"x":137.106,"y":311.198},{"x":159.729,"y":293.808},{"x":240.008,"y":286.12},{"x":253.482,"y":302.593},{"x":264.838,"y":383.123},{"x":270.812,"y":394.694},{"x":298.166,"y":394.683},{"x":301.115,"y":390.347},{"x":284.489,"y":367.206},{"x":282.491,"y":323.141},{"x":291.469,"y":328.124},{"x":300.926,"y":357.395},{"x":312.953,"y":395.403},{"x":318.346,"y":399.584},{"x":342.82,"y":399.599},{"x":344.852,"y":394.072},{"x":337.697,"y":387.45},{"x":314.619,"y":342.349},{"x":319.939,"y":295.083},{"x":345.799,"y":275.954},{"x":383.469,"y":205.985},{"x":426.826,"y":185.969},{"x":466.697,"y":181.43},{"x":470.115,"y":177.724},{"x":475.695,"y":161.998}]}]}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":135.97,"top":65.13,"width":56,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"129, 126","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":27.42,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":false,"lockScalingY":true,"text":"Christopher Green","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{},"14":{},"15":{},"16":{},"17":{}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":88.68,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20},{"type":"path-group","originX":"left","originY":"top","left":132.72,"top":126.11,"width":289,"height":82,"fill":"","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.24,"scaleY":0.24,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":"newsvgs/39845.svg","clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"paths":[{"type":"path","originX":"left","originY":"top","left":170.1,"top":72.4,"width":6.5,"height":0.2,"fill":"#000000","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"path":[["M",176.6,72.6],["c",0,0,0,-0.1,0,-0.2],["c",-2.1,0,-4.2,0,-6.5,0],["L",176.6,72.6],["z"]],"pathOffset":{"x":173.35,"y":72.5}},{"type":"path","originX":"left","originY":"top","left":7.5,"top":8.4,"width":226.02,"height":64.28,"fill":"#000000","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"path":[["M",233.5,39.5],["c",-0.2,-31.7,-29.8,-30.7,-29.8,-30.7],["s",2.3,25.2,-8.2,29.9],["c",-4.1,-5.8,0.2,-28.3,0.3,-30],["c",-12.2,-0.5,-28.3,-0.3,-49.5,0],["c",-19.1,0.3,-36.7,1.6,-52.4,3.7],["c",0.9,4.8,0.3,11.4,-5.4,19.6],["l",0.6,-18.9],["C",44.3,19.7,15,32.3,7.5,42.6],["c",5.5,8.4,20.2,15.8,42.2,21.2],["l",0.8,-22.6],["c",0,0,9.2,8.6,2,23.3],["c",23.9,5.5,56.1,8.7,94.7,8.1],["c",8.4,-0.1,16,-0.2,22.9,-0.2],["l",-2,0],["l",1.4,-22.5],["c",10.7,5.7,7.4,20.7,7,22.5],["C",226.8,72.1,233.9,71,233.5,39.5],["z"],["M",140.6,26.4],["c",0,0,11.4,10.6,-1,28.4],["L",140.6,26.4],["z"]],"pathOffset":{"x":120.5082143804806,"y":40.53362903885707}},{"type":"path","originX":"left","originY":"top","left":237.57,"top":14.62,"width":43.53,"height":61.34,"fill":"#000000","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":[1,0,0,1,0,0],"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"path":[["M",266.5,59.7],["L",254.3,47],["l",16.2,0.3],["c",2.7,0.1,10.5,-0.6,10.6,-3.3],["c",0.1,-2.7,-7.6,-6.5,-10.4,-6.6],["l",-16.2,-0.3],["l",11.7,-11.2],["c",2,-1.9,6.9,-8.7,5,-10.7],["c",-1.9,-2,-9.9,1.7,-11.8,3.6],["l",-20.3,19.5],["c",0,0,0,0,0,0.1],["c",-0.4,0.4,-0.8,0.9,-1.1,1.5],["c",-0.5,1.2,-0.6,2.6,-0.1,3.8],["c",0.2,0.6,0.6,1.1,1,1.6],["c",0,0,0,0.1,0,0.1],["c",0,0,0,0,0.1,0.1],["c",0.1,0.1,0.3,0.2,0.5,0.4],["c",0.1,0.2,0.2,0.4,0.3,0.5],["l",19.5,20.3],["c",1.9,2,10.1,10.9,12,9],["C",273.3,73.7,268.4,61.7,266.5,59.7],["z"]],"pathOffset":{"x":259.3361197712572,"y":45.29409946966729}}]}],"background":"#ffffff"}]', 4),
(181, 'Calligraphy placecards', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAADACAYAAABS+TsuAAAF/UlEQVR4Xu3UsQ0AIAwEMbL/0EFiA652+m+s6GZ39zgCBAgQ+BYYAf02MyBAgMATEFCPQIAAgSggoBHOjAABAgLqBwgQIBAFBDTCmREgQEBA/QABAgSigIBGODMCBAgIqB8gQIBAFBDQCGdGgAABAfUDBAgQiAICGuHMCBAgIKB+gAABAlFAQCOcGQECBATUDxAgQCAKCGiEMyNAgICA+gECBAhEAQGNcGYECBAQUD9AgACBKCCgEc6MAAECAuoHCBAgEAUENMKZESBAQED9AAECBKKAgEY4MwIECAioHyBAgEAUENAIZ0aAAAEB9QMECBCIAgIa4cwIECAgoH6AAAECUUBAI5wZAQIEBNQPECBAIAoIaIQzI0CAgID6AQIECEQBAY1wZgQIEBBQP0CAAIEoIKARzowAAQIC6gcIECAQBQQ0wpkRIEBAQP0AAQIEooCARjgzAgQICKgfIECAQBQQ0AhnRoAAAQH1AwQIEIgCAhrhzAgQICCgfoAAAQJRQEAjnBkBAgQE1A8QIEAgCghohDMjQICAgPoBAgQIRAEBjXBmBAgQEFA/QIAAgSggoBHOjAABAgLqBwgQIBAFBDTCmREgQEBA/QABAgSigIBGODMCBAgIqB8gQIBAFBDQCGdGgAABAfUDBAgQiAICGuHMCBAgIKB+gAABAlFAQCOcGQECBATUDxAgQCAKCGiEMyNAgICA+gECBAhEAQGNcGYECBAQUD9AgACBKCCgEc6MAAECAuoHCBAgEAUENMKZESBAQED9AAECBKKAgEY4MwIECAioHyBAgEAUENAIZ0aAAAEB9QMECBCIAgIa4cwIECAgoH6AAAECUUBAI5wZAQIEBNQPECBAIAoIaIQzI0CAgID6AQIECEQBAY1wZgQIEBBQP0CAAIEoIKARzowAAQIC6gcIECAQBQQ0wpkRIEBAQP0AAQIEooCARjgzAgQICKgfIECAQBQQ0AhnRoAAAQH1AwQIEIgCAhrhzAgQICCgfoAAAQJRQEAjnBkBAgQE1A8QIEAgCghohDMjQICAgPoBAgQIRAEBjXBmBAgQEFA/QIAAgSggoBHOjAABAgLqBwgQIBAFBDTCmREgQEBA/QABAgSigIBGODMCBAgIqB8gQIBAFBDQCGdGgAABAfUDBAgQiAICGuHMCBAgIKB+gAABAlFAQCOcGQECBATUDxAgQCAKCGiEMyNAgICA+gECBAhEAQGNcGYECBAQUD9AgACBKCCgEc6MAAECAuoHCBAgEAUENMKZESBAQED9AAECBKKAgEY4MwIECAioHyBAgEAUENAIZ0aAAAEB9QMECBCIAgIa4cwIECAgoH6AAAECUUBAI5wZAQIEBNQPECBAIAoIaIQzI0CAgID6AQIECEQBAY1wZgQIEBBQP0CAAIEoIKARzowAAQIC6gcIECAQBQQ0wpkRIEBAQP0AAQIEooCARjgzAgQICKgfIECAQBQQ0AhnRoAAAQH1AwQIEIgCAhrhzAgQICCgfoAAAQJRQEAjnBkBAgQE1A8QIEAgCghohDMjQICAgPoBAgQIRAEBjXBmBAgQEFA/QIAAgSggoBHOjAABAgLqBwgQIBAFBDTCmREgQEBA/QABAgSigIBGODMCBAgIqB8gQIBAFBDQCGdGgAABAfUDBAgQiAICGuHMCBAgIKB+gAABAlFAQCOcGQECBATUDxAgQCAKCGiEMyNAgICA+gECBAhEAQGNcGYECBAQUD9AgACBKCCgEc6MAAECAuoHCBAgEAUENMKZESBAQED9AAECBKKAgEY4MwIECAioHyBAgEAUENAIZ0aAAAEB9QMECBCIAgIa4cwIECAgoH6AAAECUUBAI5wZAQIEBNQPECBAIAoIaIQzI0CAgID6AQIECEQBAY1wZgQIEBBQP0CAAIEoIKARzowAAQIC6gcIECAQBQQ0wpkRIEBAQP0AAQIEooCARjgzAgQICKgfIECAQBQQ0AhnRoAAAQH1AwQIEIgCAhrhzAgQICCgfoAAAQJRQEAjnBkBAgQE1A8QIEAgCghohDMjQIDABRhe/d/bpcKMAAAAAElFTkSuQmCC', '["{\\"width\\": 336, \\"height\\": 192, \\"rows\\": 4, \\"cols\\": 2}",{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":144,"top":54.3,"width":48,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"93, 115","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":67.02,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":true,"lockScalingY":true,"text":"Samantha Green","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{},"14":{}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":128.28,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":67.02,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":true,"lockScalingY":true,"text":"Christopher Green","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{"lineHeight":1.2},"12":{},"13":{},"14":{},"15":{},"16":{"fontFamily":"Great Vibes","fontSize":47,"fontWeight":"normal","fontStyle":""},"17":{}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":127.28,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":67.02,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":true,"lockScalingY":true,"text":"Michael Warren","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{"fontFamily":"Great Vibes","fontSize":47,"fontWeight":"normal","fontStyle":""},"14":{"lineHeight":1.2}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":128.28,"width":150,"height":24.41,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.2,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20}],"background":"#ffffff"},{"objects":[{"type":"text","originX":"left","originY":"top","left":0,"top":0,"width":0,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":false,"text":"","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"textbox","originX":"center","originY":"top","left":168,"top":67.02,"width":322.99,"height":53.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":true,"lockMovementY":true,"lockScalingX":true,"lockScalingY":true,"text":"Jessica Warren","fontSize":47,"fontWeight":"normal","fontFamily":"Great Vibes","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":{},"11":{},"12":{},"13":{},"14":{}}},"minWidth":20},{"type":"textbox","originX":"center","originY":"top","left":168,"top":128.28,"width":150,"height":20.34,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Table 1","fontSize":18,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{}}},"minWidth":20}],"background":"#ffffff"}]', 4);

-- --------------------------------------------------------

--
-- Table structure for table `texts`
--

CREATE TABLE `texts` (
  `text_id` int(100) NOT NULL,
  `text_name` varchar(255) NOT NULL,
  `text_thumbnail` longtext NOT NULL,
  `text_json` longtext NOT NULL,
  `cat_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `texts`
--

INSERT INTO `texts` (`text_id`, `text_name`, `text_thumbnail`, `text_json`, `cat_id`) VALUES
(37, 'SOLD', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABDCAYAAABdoDjHAAAMN0lEQVR4Xu2de+g3RRXGP1okZSUVBpndDAnJC1om2k2K6g/LkCS7aZKhWUoXISors9S0sEwpygwSL5lGGhSUpZVkEZp2gcyMMrK8pkmYGanx9M7yruvu97u7M7s7u79n4OX3x7vnzJnn7HeenXNmzmyBmxEwAkbACBiBnghs0VPOYkbACBgBI2AEMIn4JTACRsAIGIHeCJhEekNnQSNgBIyAETCJ+B0wAkbACBiB3giYRHpDN1vBRwLbA88Fdgp/twO2BXavGdU/gV8C9wK/Am4EfgP8Hvg78N+BkSjslW07A3sA2wC7AU+s9H0tcHuw83rgF4D+ynY3I2AEBkDAJDIAqBmqfDTwYuAtwH41k29fk+8ELgv/vgv8BXigr7KSnIhjL+AgYH/gGZE6ZeOFwCXAbR11PQk4D3hVR7muj8s36qdreyHwk65CPZ//M3ADcBNwFXANcB1wd099FlsAAiaRBThxxRC2Bg4FjgaeM8JQfw6cC3wtrFK6dil7DwSOAXbpKtziea2qzgZODSuqFiKYRNajJL/L598A/rr+cT+xJARMIkvy5uaxyK/PA04D9KU6dtMKRRP1F4B/tOhc9u4d7N2zxfOxj8i+E4AzgXvWKDOJtEdbJC0i+XgHkm6v3U9miYBJJEu3RBklnx4AfCZBGCjGEOVPFI5STmJV2wo4HDgReFxMhz1kLwbeCyhM09RMIt2BFUl/FDgLuK+7uCXmhIBJZE7eamfrS0PIJjaP0K635qfakIhyNe8HPhbbWYT8lcBhK8jOJNIfXK1EPwKIVNwWioBJZFmOfWbISUwRwqoiuY5ElDxX7uPkDFxwKXBUSBpXzTGJxDnoopCTuzVOjaVzRcAkkqtnutv1COC48OXXXTq9xDoSeUPISYwdwmoaqb6atSqq5khMIvHvRhO28ZqtYXIETCKTuyCZAc8KO2S0NTaHtopEdgTOCdt4c7C1sEG5GcXxHywZZRJJ4yERtPJ096dRZy25IGASycUT8Xa8OYSy4jWl0dBEIgpjHQ98KE03SbXU2WwSSQOxNi9o+/bVadRZSy4ImERy8UScHY8KuQXtNMqlNZHIrsAF4bR8LraW7RC5far0xWwSSeelL4XdcK4gkA7TyTWZRCZ3QRIDVAZEYRh96cU2bbVVDPuWcPpcBwB1WvukjgcW60gkVd5GurXr5/KQw9DqZgfgWOCQSAB0cO6NwJ8a9MSu+NblimLM1263zwJHRCjR1txPlOQ1R6i8jHD9cGS1g5sB5cKuiLDPopkhYBLJzCE9zdF23vOBfXrKF2IqXXIwcEeNHm2DFVG1bXWTpWp0qbTHvm2V1DyniUglQkQg1fZ44IwERLKqBMlGI5ECY80VGrtyWTHt9LCBwedHYlDMSNYkkpEzIkxRSZOvh6KEEWr+TxLvBv5Vo6RrjaY6EnkFoO20MU2T2LsAnY6ua7GTvHSuCrvE6p/bSqSMcYqPgHUrvZh3w7ITIGASmQD0AbpMRSJKfr4N+GFlh1IKkxXKUpjkg5HKPhlCWU27fLqSXZ05qv6rsMsfav5zI5PIY4DPAW+P9OHrgG9G6rB4JgiYRDJxRKQZqUhEZugLX+VAVFdKX42pSr2nyttUY/ZV6FKQiHS+Evi+SeQhCKTIuUjhug+ByJ+DxcdEwCQyJtrD9ZWSRMpWamWiqrwKlankdwyhpLJxLBJ5X0hSV722kVciqUjkOyH3dtdwPwlrHgsBk8hYSA/bzxjbUHURlVYnupej650cGn2qFcJYJKJdTh8A/lNxnUkkbveX4BwyLzTsL83aH4aASWQZL0WqWHUbNIpw1xdDuKvtJVSxk29h21gkopLmiv1XL1yKHceQE2iKlcIqfFPoL/z4IkDFL91mjoBJZOYOLJmvg4YqKzFm+x5wCvDjFjcaprJvLBLR2EQYugK43Ewi8SsR4amNCwqTus0cAZPIzB1YMv8F4frXp0wwJB1OVDl33W/e1HQ4UJcVxbaxSKRpxWASSUMifa8Djn1/LJ8YAZNIYkAnVJcy1NBnGJp0jwR+ViOcsiyLSaTZOynegbHCWSovo11abjNHwCQycwdWzH9+uJ50qgupms6ZpJjciqGaRJZBIuv8uKxf5oJHYxJZlnN1oE9bU1VAcKomInlryJMUNphENnvDifVNWJhEpvqFJu7XJJIY0AzU5XDlrM4BaGeTijiqzZFEtKX59cDvKj51TiRNTsQkksFkkcIEk0gKFPPTsVWogaWqq1PdHFi+hGiOJOLE+sPf6zH9mN+vyhbVImASWe6LsSXwcuDTCQoz9kGpXGjPiXWHs6rvkBPrfX5VGcqYRDJ0SmKTtgWOAd45wapEIa2vhPF4i+8mIJwT2YSDt/gm/qFPpc4kMhXy4/YrP+sOdh34U9J7rBBXuaS6DxuaRMpvvQ8bjjsHDNabSWQwaLNV/HTg0JAz0Y11Q7YfAG8KhxBjE9KFnesSsqlqdLnsycPfjJQ5EZc9GfKXN6Juk8iIYGfWlW4BfDXwHmDPgWwrh25STe5jkYhO4SsM+O8KNrFk6HDWsCG9gV5lq21CwCTid0P3k+8FHA4ckDjUdUO49/3X4X72FLcvjkUiY5eC75IzaiKiFCuFMU6suxT8guYdk8iCnJlgKE8GDgrXz+r+jxStCFs8IdzPvV+k0rFIZOxLqTYSiTSV2Y98NSw+BQImkSlQz7/PpwKfB14baerNwGsAXTc7p+txV4WchgpnzYFEUl054J1ZkT+snMRNIjl5I86WLpNQ0dOq5GbsZKk+qpPx/sC34obJOWGlpHtN6loKu78KHAXcU9NBrP4mguriv6nCWdsB5wH7RvhwyJxQhFkW7YuASaQvcvnJdZmECuvfAWgbbl07AtDFUzHtR+FOjr8FJSoMeT6wT4RSrW70JXt5jQ5tFjgDOCRCv0TL51uqqjYqiWiu0NhF4jHtdEDVDO6LUWLZfBAwieTji1hL+pCIvgp1Bawulbo3GLBNOOl+UkiGx9hVXTUopHUcIFtjmuyWDhGJVgvaHLADcGwCAimftK+zcSOSiPJZ2nShfFRMhWh9AOh8yBUxzrdsXgiYRPLyR4w1fUgkpr82srLpRODB0sO7AhcAO7VRMMEzKsehKsj3h77HuL++6zCH2Drd1YY+z5cPn/aRt0yGCJhEMnRKT5NyIxHlLPT1elllPFo1HA9oss6t1cXrTSJpvKQrAg4Erk6jzlpyQcAkkosn4u3IjUQuBg4D7qoZ2o4htq7zKTk1nZU5q7JyMomk8VC5qnMajdaSBQImkSzckMSInEhEq5CD1+zEUmz8zMSHG2OA/HKoLVbdkWUSiUF1k6xO/4tE6na7xWu3hkkRMIlMCn/SznMikTaThsJaKityclIU+im7Mqyarq8RN4n0w7SQugg4Grg1To2lc0XAJJKrZ7rblQuJXAocCfyxxRByuIVxFYFoCCaRFo5seEQfE3ov7+yvwpK5I2ASyd1D7e3LgUREIDqkp5pZbZtuYVQuQru4xipRX9imvI1K1Cvp29RMIm09ufk5kYa2Ayu/5PMg3fGblYRJZFbuWmns1CQS89Wp93Bv4LQBKwqXwdMkd0LIyayL05tE2v9GlAs7GzgVuLG9mJ+cMwImkTl776G2bw2o3LpOc6vI4dB3hRS9fxs4Bfgp8EAknBqDtoEqV7JLpK468T6TnElkvSN0QPNc4ELgtvWP+4klIWASWZI3N49Fd5o/G3gJ8LJQ6j3mpHEVJSWglTBVafffJiCPqv6iPL0qCqveVqztOquiCe6SHpOcSWSzdxT2U6jyJuAq4BrgOuDuZf6MPKo2CJhE2qC0jGceCzwtlAfRaXGVfd8N2BLQuY26ibqYNO4ArgV0L4j+3TIAcTShLELZHtgd2BnYA1BpFtleXW3JxttD4UcRnaoH629R0mUZnvQojEBGCJhEMnKGTTECRsAIzA0Bk8jcPGZ7jYARMAIZIWASycgZNsUIGAEjMDcETCJz85jtNQJGwAhkhIBJJCNn2BQjYASMwNwQMInMzWO21wgYASOQEQImkYycYVOMgBEwAnNDwCQyN4/ZXiNgBIxARgiYRDJyhk0xAkbACMwNAZPI3Dxme42AETACGSFgEsnIGTbFCBgBIzA3BEwic/OY7TUCRsAIZISASSQjZ9gUI2AEjMDcEDCJzM1jttcIGAEjkBEC/wNgkONiPZ3W7gAAAABJRU5ErkJggg==', '{"type":"textbox","originX":"left","originY":"top","left":39.5,"top":309.06,"width":400,"height":66.67,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"SOLD","fontSize":46.800000000000004,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{"fontFamily":"Alfa Slab One","fontSize":59},"1":{"fontFamily":"Alfa Slab One","fontSize":59},"2":{"fontFamily":"Alfa Slab One","fontSize":59},"3":{"fontFamily":"Alfa Slab One","fontSize":59,"fontWeight":"normal","fontStyle":""},"4":{}}},"minWidth":20}', 8),
(38, 'SOLD2', 'data:image/png;base64,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', '{"type":"textbox","originX":"left","originY":"top","left":39.5,"top":309.06,"width":400,"height":66.67,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"SOLD2","fontSize":46.800000000000004,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{"fontFamily":"Alfa Slab One","fontSize":59},"1":{"fontFamily":"Alfa Slab One","fontSize":59},"2":{"fontFamily":"Alfa Slab One","fontSize":59},"3":{"fontFamily":"Alfa Slab One","fontSize":59,"fontWeight":"normal","fontStyle":""},"4":{}}},"minWidth":20}', 9),
(39, 'asdfsdfdfsd', 'data:image/png;base64,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', '{"type":"textbox","originX":"left","originY":"top","left":39.5,"top":309.06,"width":400,"height":40.68,"fill":"#274e13","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"lockMovementX":false,"lockMovementY":false,"lockScalingX":false,"lockScalingY":true,"text":"Heading Text","fontSize":46.800000000000004,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"center","textBackgroundColor":"","styles":{"0":{"0":{"fontSize":"36","fontFamily":"Alfa Slab One"},"1":{"fontSize":"36","fontFamily":"Alfa Slab One"},"2":{"fontSize":"36","fontFamily":"Alfa Slab One"},"3":{"fontSize":"36","fontFamily":"Alfa Slab One"},"4":{"fontSize":"36","fontFamily":"Alfa Slab One"},"5":{"fontSize":"36","fontFamily":"Alfa Slab One"},"6":{"fontSize":"36","fontFamily":"Alfa Slab One"},"7":{"fontSize":"36","fontFamily":"Alfa Slab One"},"8":{"fontSize":"36","fontFamily":"Alfa Slab One"},"9":{"fontSize":"36","fontFamily":"Alfa Slab One"},"10":{"fontSize":"36","fontFamily":"Alfa Slab One"},"11":{"fontSize":"36","fontFamily":"Alfa Slab One","fontWeight":"normal","fontStyle":""}}},"minWidth":20}', 8);

-- --------------------------------------------------------

--
-- Table structure for table `text_categories`
--

CREATE TABLE `text_categories` (
  `textcat_id` int(11) NOT NULL,
  `textcat_name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `text_categories`
--

INSERT INTO `text_categories` (`textcat_id`, `textcat_name`) VALUES
(8, 'Quick Text'),
(9, 'test'),
(11, 'testing');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'pehamraza', 'sanaullahAhmad@gmail.com', '$2y$10$nUXzQ.RXUALr/gNC00VUeOa18vmAhFwZHoi3l1klEUf4YIXWXzMSu', 'obMXRKV8R3nLR4TvNowBQz0LFlO1gvr0BxO5A0oOPYQNV5j4lOtsXfx5O7rK', '2016-11-29 05:03:05', '2016-11-30 09:12:15'),
(2, 'sanaullah', 'sanaullah@pakipreneurs.com', '$2y$10$4mCFJlug7EFV9YbR8r6B7uFWaf/iSiXcnQgG/TXPm/1RswcQms2/K', '86ROMidJ2z7sOucw7SYqxif0KkKjULcK7tS4UH559b7bTL8JLSxZQtVCY5aQ', '2016-11-30 09:29:16', '2016-11-30 09:29:45');

-- --------------------------------------------------------

--
-- Table structure for table `usertemplatemap`
--

CREATE TABLE `usertemplatemap` (
  `ID` int(11) NOT NULL,
  `userid` bigint(20) NOT NULL,
  `template_id` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertemplatemap`
--

INSERT INTO `usertemplatemap` (`ID`, `userid`, `template_id`) VALUES
(148, 4, 346),
(147, 27, 345),
(146, 26, 344),
(145, 26, 343),
(144, 1, 342),
(143, 1, 341),
(142, 1, 340),
(141, 1, 339),
(140, 24, 337),
(139, 22, 336),
(138, 22, 334),
(100, 18, 263),
(101, 18, 264),
(102, 18, 265),
(103, 18, 266),
(104, 18, 267),
(105, 18, 268),
(137, 24, 333),
(136, 24, 332),
(135, 1, 331),
(134, 1, 330),
(133, 1, 329),
(132, 4, 325),
(131, 4, 324),
(130, 23, 321),
(129, 22, 320),
(128, 21, 319),
(127, 20, 316),
(126, 3, 312),
(125, 1, 299),
(124, 1, 294),
(123, 4, 291),
(122, 4, 290);

-- --------------------------------------------------------

--
-- Table structure for table `useruploads`
--

CREATE TABLE `useruploads` (
  `id` int(11) NOT NULL,
  `imgpath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useruploads`
--

INSERT INTO `useruploads` (`id`, `imgpath`) VALUES
(1, 'uploads/bohochicinvite-1.jpg'),
(2, 'uploads/cards_gifts_frame.jpg'),
(3, 'uploads/clean_cursive_invite.jpg'),
(4, 'uploads/free-wedding-program-with-bridal-party-silhouettes.jpg'),
(11, 'uploads/Lighthouse.jpeg'),
(12, 'uploads/Lighthouse.jpeg'),
(13, 'uploads/Penguins.jpeg'),
(14, 'uploads/Tulips.jpeg'),
(15, 'uploads/Ghost (1).png'),
(16, 'uploads/Ghost (1).png'),
(17, 'uploads/linkedin-logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_templates`
--

CREATE TABLE `user_templates` (
  `template_id` int(100) NOT NULL,
  `product_id` int(100) NOT NULL,
  `userid` int(100) NOT NULL,
  `template_name` varchar(255) NOT NULL,
  `canvas_thumbnail` longtext NOT NULL,
  `canvas_json` longtext NOT NULL,
  `created_date` date NOT NULL,
  `modified_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_templates`
--

INSERT INTO `user_templates` (`template_id`, `product_id`, `userid`, `template_name`, `canvas_thumbnail`, `canvas_json`, `created_date`, `modified_date`) VALUES
(43, 0, 1, 'test', 'templates/43.png', 'templates/43.ype', '2016-06-17', '2016-07-18'),
(44, 0, 1, 'test123', 'templates/44.png', 'templates/44.ype', '2016-06-17', '2016-07-15'),
(46, 0, 1, '123', 'templates/46.png', 'templates/46.ype', '2016-06-20', '2016-07-25'),
(101, 0, 1, 'energy', 'templates/101.png', 'templates/101.ype', '2016-07-25', '2016-07-25'),
(104, 0, 1, 'texting', 'templates/104.png', 'templates/104.ype', '2016-07-25', '2016-07-25'),
(105, 0, 1, 'beauty', 'templates/105.png', 'templates/105.ype', '2016-07-25', '2016-07-25'),
(106, 294, 1, 'entry', 'templates/106.png', 'templates/106.ype', '2016-07-25', '2016-07-25'),
(107, 0, 1, 'nice', 'templates/107.png', 'templates/107.ype', '2016-07-25', '2016-07-25'),
(108, 0, 1, '', 'templates/108.png', 'templates/108.ype', '2016-07-25', '2016-07-25'),
(109, 296, 1, 'sea', 'templates/109.png', 'templates/109.ype', '2016-07-25', '2016-07-25'),
(110, 0, 1, 'sssssss', 'templates/109.png', 'templates/109.ype', '2016-11-26', '2016-11-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminuploads`
--
ALTER TABLE `adminuploads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminuser`
--
ALTER TABLE `adminuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `background`
--
ALTER TABLE `background`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bgimage`
--
ALTER TABLE `bgimage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bg_categories`
--
ALTER TABLE `bg_categories`
  ADD PRIMARY KEY (`bgcat_id`);

--
-- Indexes for table `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `element_categories`
--
ALTER TABLE `element_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`template_id`);

--
-- Indexes for table `template_categories`
--
ALTER TABLE `template_categories`
  ADD PRIMARY KEY (`tempcat_id`);

--
-- Indexes for table `template_test`
--
ALTER TABLE `template_test`
  ADD PRIMARY KEY (`template_id`);

--
-- Indexes for table `texts`
--
ALTER TABLE `texts`
  ADD PRIMARY KEY (`text_id`);

--
-- Indexes for table `text_categories`
--
ALTER TABLE `text_categories`
  ADD PRIMARY KEY (`textcat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `usertemplatemap`
--
ALTER TABLE `usertemplatemap`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `useruploads`
--
ALTER TABLE `useruploads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_templates`
--
ALTER TABLE `user_templates`
  ADD PRIMARY KEY (`template_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminuploads`
--
ALTER TABLE `adminuploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `adminuser`
--
ALTER TABLE `adminuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `background`
--
ALTER TABLE `background`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `bgimage`
--
ALTER TABLE `bgimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `bg_categories`
--
ALTER TABLE `bg_categories`
  MODIFY `bgcat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `element`
--
ALTER TABLE `element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;
--
-- AUTO_INCREMENT for table `element_categories`
--
ALTER TABLE `element_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `template`
--
ALTER TABLE `template`
  MODIFY `template_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=433;
--
-- AUTO_INCREMENT for table `template_categories`
--
ALTER TABLE `template_categories`
  MODIFY `tempcat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `template_test`
--
ALTER TABLE `template_test`
  MODIFY `template_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;
--
-- AUTO_INCREMENT for table `texts`
--
ALTER TABLE `texts`
  MODIFY `text_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `text_categories`
--
ALTER TABLE `text_categories`
  MODIFY `textcat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `usertemplatemap`
--
ALTER TABLE `usertemplatemap`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT for table `useruploads`
--
ALTER TABLE `useruploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `user_templates`
--
ALTER TABLE `user_templates`
  MODIFY `template_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
