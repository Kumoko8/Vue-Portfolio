<template>
    <form action="/api/contact" >
          <Grid item>

          <div>
            <TextField 
            type="text"
             name="name" 
             className="roboto-font"
             placeholder="Type your name here"
              value={name} 
              onChange={this.handleChange} 
              required />
          </div>
          </Grid>
          <Grid item>
            
          <div>
            <TextField
              type="email"
              name="email"
              className="roboto-font"
              placeholder='Type your email here'
              value={email}
              onChange={this.handleChange}
              onBlur={this.handleEmailBlur}
              required
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          </Grid>
          <Grid item>

          <div>
            <TextField 
            name="message" 
            className="roboto-font"
            placeholder='Tell me a bit about yourself!' 
            value={message} 
            onChange={this.handleChange} 
            required />
          </div>
          </Grid>
          <Grid item>

          <Button type="submit" className="roboto-font">Submit</Button>
          </Grid>
        </form>
</template>