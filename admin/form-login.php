<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<?php do_action( 'woocommerce_before_customer_login_form' ); ?>

<div id="admin_login">

	<div class="modal-content" style="width:300px; margin: 0px auto; padding: 15px; margin-top:100px;">
	<?php wc_print_notices(); ?>
	<?php if(is_user_logged_in() && !current_user_can( 'manage_options' )) {
		echo "<ul class='woocommerce-error'>";
		echo "<li>You do not have the privilages to access this page. Please visit the <a href='http://design.youprintem.com'>designer here</a>.</li>";
		echo "</ul>";
		}
	?>

		<h2 style="text-align:center;"><?php _e( 'Login', 'woocommerce' ); ?></h2>

		<form method="post" class="login">

			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<p class="form-row form-row-wide">
				<label for="username"><?php _e( 'Username or email address', 'woocommerce' ); ?> <span class="required">*</span></label>
				<input type="text" class="input-text" name="username" id="username" value="<?php if ( ! empty( $_POST['username'] ) ) echo esc_attr( $_POST['username'] ); ?>" />
			</p>
			<p class="form-row form-row-wide">
				<label for="password"><?php _e( 'Password', 'woocommerce' ); ?> <span class="required">*</span></label>
				<input class="input-text" type="password" name="password" id="password" />
			</p>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<p class="form-row">
				<?php wp_nonce_field( 'woocommerce-login' ); ?>
				<input type="submit" class="btn btn-info" name="login" value="<?php esc_attr_e( 'Login', 'woocommerce' ); ?>" />
				<input type="hidden" name="redirect" value="http://design.youprintem.com/admin/index.php" />
				<label for="rememberme" class="inline">
					<input name="rememberme" type="checkbox" id="rememberme" value="forever" /> <?php _e( 'Remember me', 'woocommerce' ); ?>
				</label>
			</p>

			<?php do_action( 'woocommerce_login_form_end' ); ?>
			
		</form>

	</div>

</div>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
