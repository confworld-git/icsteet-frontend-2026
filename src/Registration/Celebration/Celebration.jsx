import React, { useEffect, useRef } from "react";
import "./Celebration.css";

const Celebration = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const retina = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const PI = Math.PI;
    const sqrt = Math.sqrt;
    const round = Math.round;
    const random = Math.random;
    const cos = Math.cos;
    const sin = Math.sin;
    let rAF = window.requestAnimationFrame;
    let cAF = window.cancelAnimationFrame;

    let animationFrameId;

    const Vector2 = (x, y) => ({
      x: x,
      y: y,
      Length() {
        return sqrt(this.SqrLength());
      },
      SqrLength() {
        return this.x * this.x + this.y * this.y;
      },
      Add(vec) {
        this.x += vec.x;
        this.y += vec.y;
      },
      Sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
      },
      Div(f) {
        this.x /= f;
        this.y /= f;
      },
      Mul(f) {
        this.x *= f;
        this.y *= f;
      },
      Normalize() {
        const sqrLen = this.SqrLength();
        if (sqrLen !== 0) {
          const factor = 1.0 / sqrt(sqrLen);
          this.x *= factor;
          this.y *= factor;
        }
      },
      Normalized() {
        const sqrLen = this.SqrLength();
        if (sqrLen !== 0) {
          const factor = 1.0 / sqrt(sqrLen);
          return Vector2(this.x * factor, this.y * factor);
        }
        return Vector2(0, 0);
      },
    });

    function ConfettiPaper(x, y) {
      this.pos = Vector2(x, y);
      this.rotationSpeed = random() * 600 + 800;
      this.angle = random() * 360;
      this.rotation = random() * 360;
      this.cosA = 1.0;
      this.size = 5.0;
      this.oscillationSpeed = random() * 1.5 + 0.5;
      this.xSpeed = 40.0;
      this.ySpeed = random() * 60 + 50.0;
      this.corners = Array(4)
        .fill(0)
        .map((_, i) => {
          const dx = cos(this.angle + ((i * 90 + 45) * PI) / 180);
          const dy = sin(this.angle + ((i * 90 + 45) * PI) / 180);
          return Vector2(dx, dy);
        });
      this.time = random();

      this.Update = function (dt) {
        this.time += dt;
        this.rotation += this.rotationSpeed * dt;
        this.cosA = cos((this.rotation * PI) / 180);
        this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * dt;
        this.pos.y += this.ySpeed * dt;

        if (this.pos.y > canvas.height) {
          this.pos.x = random() * canvas.width;
          this.pos.y = 0;
        }
      };

      this.Draw = function (ctx) {
        ctx.fillStyle =
          this.cosA > 0
            ? `hsl(${random() * 360}, 100%, 50%)`
            : `hsl(${random() * 360}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(
          this.pos.x + this.corners[0].x * this.size,
          this.pos.y + this.corners[0].y * this.size * this.cosA
        );
        for (let i = 1; i < 4; i++) {
          ctx.lineTo(
            this.pos.x + this.corners[i].x * this.size,
            this.pos.y + this.corners[i].y * this.size * this.cosA
          );
        }
        ctx.closePath();
        ctx.fill();
      };
    }

    function Ribbon(x, y) {
      this.pos = Vector2(x, y);
      this.size = random() * 20 + 10;
      this.xSpeed = random() * 50 + 100;
      this.ySpeed = random() * 50 + 80;
      this.angle = random() * 3 * PI;
      this.rotationSpeed = random() * 2 * PI;
      this.color = `hsl(${random() * 360}, 100%, 50%)`;

      this.Update = function (dt) {
        this.pos.x += this.xSpeed * dt;
        this.pos.y += this.ySpeed * dt;
        this.angle += this.rotationSpeed * dt;

        if (this.pos.y > canvas.height) {
          this.pos.x = random() * canvas.width;
          this.pos.y = -this.size;
        }
      };

      this.Draw = function (ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 8, this.size, this.size / 4);
        ctx.restore();
      };
    }

    const confettiPapers = Array(150)
      .fill(0)
      .map(
        () =>
          new ConfettiPaper(random() * canvas.width, random() * canvas.height)
      );

    const ribbons = Array(20)
      .fill(0)
      .map(() => new Ribbon(random() * canvas.width, random() * canvas.height));

    const draw = (timestamp) => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      confettiPapers.forEach((paper) => {
        paper.Update(1 / 60);
        paper.Draw(context);
      });

      ribbons.forEach((ribbon) => {
        ribbon.Update(1 / 60);
        ribbon.Draw(context);
      });

      animationFrameId = rAF(draw);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    animationFrameId = rAF(draw);

    return () => cAF(animationFrameId);
  }, []);

  return (
    <div className="confetti-container" data-aos="fade-up">
      <h2>
        Claim a <span>5% discount</span> on registration with CERADA's
        exclusive <br /> Premium Membership
      </h2>
      <div>
        <a href="https://confworld.org/Student-Membership" target="_blank">Student</a>
        <a href="https://confworld.org/Professional-Membership" target="_blank">Professional</a>
      </div>
      <canvas id="confetti" ref={canvasRef}></canvas>
    </div>
  );
};

export default Celebration;
