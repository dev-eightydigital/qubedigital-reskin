<div class="contact_form_wrapper">

<form id="form--contact" name="contact" action="#" method="post" class="form--contact">
	<fieldset>
		<!-- LeaveThis -->
		<div id="LeaveMe">
			<label for="leaveme">Leave this field blank</label>
			<input type="text" name="leaveme" id="leaveme">
		</div>
		
		<!-- LeaveThis -->
		
		<div class="clear"></div>
		<legend class="off-screen">Contact us</legend>
		<ul>
		<li>
			<label for="field--name">Full Name*:</label>
			<input type="text" id="name" name="name" class="field--name"/>
		</li>
		<li>
			<label for="field--company">Company</label>
			<input type="text" id="company" name="company" class="field--company"/>
		</li>
		<li>
			<label for="field--email">Email*:</label>
			<input type="email" id="email" name="email" class="field--email"/>
		</li>
		<li>
			<label for="field--phone">Phone</label>
			<input type="text" id="phone" name="phone" class="field--phone"/>
		</li>
		<li>
			<label for="field--comments">Enquiry*:</label>
			<textarea id="msg" name="msg" class="field--comments"></textarea>
		</li>
		</ul>
	</fieldset>
	<button id="send" class="button--generic"><span>submit</span></button>
</form>

</div><!-- \section_5_forms -->

<script src="contact-form/form.js"></script>