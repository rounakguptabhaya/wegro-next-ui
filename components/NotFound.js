import Link from "next/link"

const NotFound = () => {
  return (
    <div>
	<section class="error-one">
		<div class="auto-container">
			<h1>403</h1>
			{/* <h2>Oops! that page can't be found.</h2> */}
			<div class="text">You are not Logged in!</div>
			<div class="button-box text-center">
				{/* <a href="#" class="template-btn btn-style-one">
					<span class="btn-wrap">
						<span class="text-one">Login</span>
						<span class="text-two">Login</span>
					</span>
				</a> */}
				<Link href="/login" class="template-btn btn-style-one" >
					
						<span class="btn-wrap">
							<span class="text-one">Login</span>
							<span class="text-two">Login</span>
						</span>
					
				</Link>
			</div>
		</div>
	</section>
    </div>
  )
}

export default NotFound