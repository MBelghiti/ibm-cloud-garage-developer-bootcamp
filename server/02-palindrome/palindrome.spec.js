describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = () => true;

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude');
    it('true for mom mom');
    it('false for dad mom');
    it('true for whitespaces');
    it('error for empty string');
    it('error for not a string');
  });
});
